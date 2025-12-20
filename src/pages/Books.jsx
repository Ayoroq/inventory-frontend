import { useEffect, useState } from "react";
import {useNavigate} from "react-router";
import Card from "../components/Card.jsx";
import styles from "../styles.module.css";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function Books() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (direction === "asc") {
        return a[key] > b[key] ? 1 : -1;
      }
      return a[key] < b[key] ? 1 : -1;
    });

    setFilteredProducts(sortedProducts);
    setSortConfig({ key, direction });
  };
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`${API_URL}/books`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  async function deleteProduct(id){
    try {
        const response = await fetch(`${API_URL}/books/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div>
      <h1>Books Inventory</h1>
      <section>
        <div>
          <input
            className={styles.search}
            type="search"
            id="book-search"
            placeholder="Search for books"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>
      <div>
        <p>Total Books: {filteredProducts.length}</p>
        <button className={styles.addBtn} onClick={() => navigate("/books/new")}>Add new book</button>
      </div>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => handleSort("name")}
              scope="col"
              className={styles.col}
            >
              Book Name
            </th>
            <th
              onClick={() => handleSort("quantity")}
              scope="col"
              className={styles.col}
            >
              Quantity
            </th>
            <th
              onClick={() => handleSort("price")}
              scope="col"
              className={styles.col}
            >
              Price
            </th>
            <th
              onClick={() => handleSort("categories")}
              scope="col"
              className={styles.col}
            >
              Categories
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((filteredProduct) => (
            <Card key={filteredProduct.id} props={filteredProduct} onDelete={deleteProduct} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
