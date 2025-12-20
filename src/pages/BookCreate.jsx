import { useNavigate } from "react-router";
import styles from "../styles.module.css";
import BookForm from "../components/BookForm.jsx";

export default function BookCreate() {
  const navigate = useNavigate();

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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      navigate("/books");
    } catch (error) {
      console.log(error);
      alert("Failed to add book.");
    }
  }

  return (
    <div className={styles.editContainer}>
      <h1>Add a New Book</h1>
      <BookForm
        onSubmit={submitHandler}
        submitButtonText="Add book"
        submitAction="create"
      />
    </div>
  );
}
