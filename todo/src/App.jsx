import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTask] = useState([]);
  const [value, setValues] = useState('');

  function addItem(e) {
    e.preventDefault();
    if (!value) {
      return;
    }
    const newTask = [...tasks, { text: value }];
    setTask(newTask);
    setValues('');
  }

  function removeItem(id) {
    const temp = tasks.filter((_, index) => index !== id); 
    setTask(temp);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          className="input"
          placeholder="Add"
          value={value}
          onChange={(e) => setValues(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task">
            {task.text}
            <button
              className="btn_remove"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;