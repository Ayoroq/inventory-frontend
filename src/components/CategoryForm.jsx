import { useState, useEffect } from "react";
import styles from "../styles.module.css";

export default function CategoryForm({ initialData, onSubmit, submitButtonText, submitAction }) {
  const [formData, setFormData] = useState({
    name: ""
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
       <button className={`${styles.formActionButton} ${styles[submitAction]}`} type="submit">
              {submitButtonText}
            </button>
    </form>
  );
}