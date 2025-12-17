import { useEffect, useState } from "react";

export default function Products() {
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <p>Here are the products</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
