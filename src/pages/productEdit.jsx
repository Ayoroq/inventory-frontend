import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "../styles.module.css";
export default function ProductEdit() {
  const { id } = useParams();
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

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className={styles.editContainer}>
          <h1>Edit Product: {product.name}</h1>
          {/* Form elements to edit the product would go here */}
        </div>
      )}
    </>
  );
}
