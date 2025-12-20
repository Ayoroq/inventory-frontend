import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import styles from "../styles.module.css";
import ProductForm from "../components/ProductForm.jsx";

export default function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/products/${id}`
        );

        if (response.status === 404) {
          setLoading(false);
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  async function submitHandler(formData) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/products/${id}`,
        {
          method: "PUT",
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
      alert("Failed to update book.");
    }
  };

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className={styles.editContainer}>
          <h1>Edit Book: {product.name}</h1>
          <ProductForm
            initialData={product}
            onSubmit={submitHandler}
            submitButtonText="Save Changes"
            submitAction="edit"
          />
        </div>
      )}
    </>
  );
}
