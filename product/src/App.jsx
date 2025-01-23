import React, { useState, useCallback, useMemo } from 'react';
import './App.css';

// Fake API data
const fakeApi = [
  { id: 1, name: 'Apple iPhone 13', category: 'Electronics' },
  { id: 2, name: 'Samsung Galaxy S21', category: 'Electronics' },
  { id: 3, name: 'Sony PlayStation 5', category: 'Gaming' },
  { id: 4, name: 'Nike Air Max', category: 'Footwear' },
  { id: 5, name: 'Dell XPS 13', category: 'Computers' },
  { id: 6, name: 'HP Envy 13', category: 'Computers' },
  { id: 7, name: 'Logitech Wireless Mouse', category: 'Accessories' },
  { id: 8, name: 'Apple Watch Series 7', category: 'Electronics' },
  { id: 9, name: 'Google Pixel 6', category: 'Electronics' },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); // For the search term input
  const [products, setProducts] = useState(fakeApi); // Store the products

  // Optimized clear search function using useCallback
  const clearSearch = useCallback(() => {
    setSearchTerm(''); // Reset search term
  }, []);

  // Optimized filter function using useMemo
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]); // Re-run filtering when searchTerm or products change

  return (
    <div className="app">
      <h1>Filterable Product List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      />

      {/* Clear Search Button */}
      <button onClick={clearSearch}>Clear Search</button>

      {/* Product Count */}
      <p>Showing {filteredProducts.length} products</p>

      {/* Product List */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
