import React, { useState, useCallback, useMemo } from 'react';
import { CartProvider, useCart } from './CartContext';
import './App.css';


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

const ProductList = ({ products, searchTerm, onSearchChange, clearSearch }) => {
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  return (
    <div>
      <h1>Filterable Product List</h1>

      {}
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {}
      <button onClick={clearSearch}>Clear Search</button>

      {}
      <p>Showing {filteredProducts.length} products</p>

      {}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products] = useState(fakeApi);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return (
    <CartProvider>
      <div className="app">
        <ProductList
          products={products}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          clearSearch={clearSearch}
        />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
