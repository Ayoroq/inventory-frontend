import { useState, useEffect } from "react";
import styles from "../styles.module.css";

export default function ProductForm({ initialData, onSubmit, submitButtonText, submitAction }) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    price: 0.0,
    description: "",
    categories: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.editForm} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          required
          value={formData.quantity}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          required
          step="0.01"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Categories:
        <input
          type="text"
          name="categories"
          required
          value={formData.categories}
          onChange={handleChange}
        />
      </label>
      <button className={`${styles.formActionButton} ${styles[submitAction]}`} type="submit">
        {submitButtonText}
      </button>
    </form>
  );
}