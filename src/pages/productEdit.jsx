import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "../styles.module.css";
export default function ProductEdit() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    price: 0.00,
    categories: "",
  });

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
          <form className={styles.editForm}>
            <label>
              Name:
              <input type="text" defaultValue={product.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
            </label>
            <label>
              Quantity:
              <input type="number" defaultValue={product.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} />
            </label>
            <label>
              Price:
              <input type="number" step="0.01" defaultValue={product.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
            </label>
            <label>
              Categories:
              <input type="text" defaultValue={product.categories} onChange={(e) => setFormData({ ...formData, categories: e.target.value })} />
            </label>
            <button className={styles.editButton} type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </>
  );
}