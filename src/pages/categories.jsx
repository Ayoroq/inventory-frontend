import { useEffect, useState } from "react";
import styles from "../styles.module.css";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(`${API_URL}/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);
  return (
    <div>
      <h1>Book Categories</h1>
      <ul className={styles.categoryContainer}>
        {categories.map((category) => (
          <li key={category.id} className={styles.category}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
