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
    price: 0.0,
    description: "",
    categories: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        description: product.description,
        categories: product.categories,
      });
    }
  }, [product]);

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

  function submitHandler(e) {
    e.preventDefault();
    async function updateProduct() {
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

        const data = await response.json();
        setProduct(data);
        alert("Product updated successfully!");
      } catch (error) {
        console.log(error);
        alert("Failed to update product.");
      }
    }
    updateProduct();
  }

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className={styles.editContainer}>
          <h1>Edit Product: {product.name}</h1>
          <form className={styles.editForm} onSubmit={submitHandler}>
            <label>
              Name:
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                required
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                required
                step="0.01"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </label>
            <label>
              Description:
              <textarea
                value={formData.description}
                required
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </label>
            <label>
              Categories:
              <input
                type="text"
                required
                value={formData.categories}
                onChange={(e) =>
                  setFormData({ ...formData, categories: e.target.value })
                }
              />
            </label>
            <button className={styles.editButton} type="submit">
              Save Changes
            </button>
          </form>
        </div>
      )}
    </>
  );
}
