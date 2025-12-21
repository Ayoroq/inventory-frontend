import CategoryForm from "../components/CategoryForm"
import { useNavigate } from "react-router";
import {useState} from "react";

export default function CategoriesCreate() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
   async function submitHandler(formData) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/categories/`,
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
            <h1>Categories Create</h1>
            <p>Here you can create a new category</p>
            <CategoryForm 
                initialData={{}}
                onSubmit={submitHandler}
                submitButtonText="Create Category"
                submitAction="create"
                error={error}
            />
        </div>
    )
}