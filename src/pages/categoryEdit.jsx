import CategoryForm from "../components/CategoryForm";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import styles from "../styles.module.css";

export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/categories/${id}`
        );

        if (response.status === 404) {
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategory();
  }, [id]);

  async function submitHandler(formData) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/categories/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        setError(data.errors);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Category Edit</h1>
      <p>Here you can edit a category</p>
      <CategoryForm
        initialData={category}
        onSubmit={submitHandler}
        submitButtonText="Update Category"
        submitAction="edit"
        error={error}
      />
    </div>
  );
}