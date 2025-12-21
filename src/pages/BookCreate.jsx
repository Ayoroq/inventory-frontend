import { useNavigate } from "react-router";
import { useState } from "react";
import styles from "../styles.module.css";
import BookForm from "../components/BookForm.jsx";

export default function BookCreate() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  async function submitHandler(formData) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/books`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        setErr(data.error || data.errors || "An error occurred in the request.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.editContainer}>
      <h1>Add a New Book</h1>
      <BookForm
        onSubmit={submitHandler}
        submitButtonText="Add book"
        error={err}
        submitAction="create"
      />
    </div>
  );
}
