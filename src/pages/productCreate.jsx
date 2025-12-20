import { useNavigate } from "react-router";
import styles from "../styles.module.css";
import ProductForm from "../components/ProductForm.jsx";

export default function ProductCreate() {
  const navigate = useNavigate();

  async function submitHandler(formData) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/products`,
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

      navigate("/products");
    } catch (error) {
      console.log(error);
      alert("Failed to add book.");
    }
  };

  return (
    <div className={styles.editContainer}>
      <h1>Add a New Book</h1>
      <ProductForm
        onSubmit={submitHandler}
        submitButtonText="Add book"
        submitAction="create"
      />
    </div>
  );
}