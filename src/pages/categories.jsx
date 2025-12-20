import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "../styles.module.css";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function Categories() {
  const navigate = useNavigate();
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
      <p>Here you can see all the book categories</p>
      <p>There are {categories.length} categories</p>
      <button
        className={`${styles.addBtn} ${styles.btn}`}
        onClick={() => navigate("/categories/new")}
      >
        Add new category
      </button>
      <ul className={styles.categoryContainer}>
        {categories.map((category) => (
          <li key={category.id} className={styles.category} onClick={() => navigate(`/categories/${category.id}`)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
