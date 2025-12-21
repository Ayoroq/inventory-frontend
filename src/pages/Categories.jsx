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

  async function handleDelete(id) {
    try {
      const response = await fetch(`${API_URL}/categories/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
        console.log(error);
    }
  }

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
          <li
            key={category.id}
            className={styles.category}
            onClick={() => navigate(`/categories/${category.id}`)}
          >
            {category.name}
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(category.id);
              }}
            >
              <g id="Material Symbols Icon (1) 1">
                <path
                  id="Vector"
                  d="M13.05 42C12.225 42 11.5188 41.7062 10.9315 41.1185C10.3438 40.5312 10.05 39.825 10.05 39V10.5H8V7.5H17.4V6H30.6V7.5H40V10.5H37.95V39C37.95 39.8 37.65 40.5 37.05 41.1C36.45 41.7 35.75 42 34.95 42H13.05ZM34.95 10.5H13.05V39H34.95V10.5ZM18.35 34.7H21.35V14.75H18.35V34.7ZM26.65 34.7H29.65V14.75H26.65V34.7Z"
                  fill="black"
                />
              </g>
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}
