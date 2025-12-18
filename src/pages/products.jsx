import { useEffect, useState } from "react";
import Card from "../components/card.jsx";
import styles from "../styles.module.css";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: "asc" });

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";

    const sortedProducts = [...products].sort((a, b) => {
      if (direction === "asc") {
        return a[key] > b[key] ? 1 : -1;
      }
      return a[key] < b[key] ? 1 : -1;
    });

    setProducts(sortedProducts);
    setSortConfig({ key, direction });
  };
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
            <th onClick={() => handleSort('name')} scope="col" className={styles.col}>
              Book Name
            </th>
            <th onClick={() => handleSort('quantity')} scope="col" className={styles.col}>
              Quantity
            </th>
            <th onClick={() => handleSort('price')} scope="col" className={styles.col}>
              Price
            </th>
            <th onClick={() => handleSort('categories')} scope="col" className={styles.col}>
              Categories
            </th>
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
