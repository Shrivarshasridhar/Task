import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState(''); // Holds the entered city
  const [weather, setWeather] = useState(null); // Holds the weather data
  const [error, setError] = useState(''); // Holds error messages

  const apiKey = '18729885a483485f16b0118a293794b9';
  const apiName = 'weatherapproject';

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setError('');
    setWeather(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      setWeather(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App - {apiName}</h1>

      {/* Search Box */}
      <div className="search">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Weather Information */}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <h3>{Math.round(weather.main.temp)}°C</h3>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;
