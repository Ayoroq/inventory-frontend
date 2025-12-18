import { useEffect, useState } from "react";
import Card from "../components/card.jsx";

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
      <h1>Books Inventory</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Card key={product.id} props={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
