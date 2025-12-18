import styles from "../styles.module.css";
import { useNavigate } from "react-router";

export default function Card({ props }) {
  const navigate = useNavigate();
  return (
    <tr onClick={() => navigate(`/products/${props.id}`)}
      className={`${styles.card} ${
        props.quantity > 0 ? styles.stock : styles["no-stock"]
      }`}
    >
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>${props.price}</td>
      <td>{props.categories}</td>
    </tr>
  );
}