import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products using Axios
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products); // Access the 'products' array from the response
        setLoading(false); // Stop the loading state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop the loading state even if there's an error
      });
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.title}</strong> - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
