import styles from '../styles.module.css';

export default function Card({ props }) {
  return (
    <tr className={`${styles.card} ${props.quantity > 0 ? styles.stock : styles['no-stock']}`}>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>${props.price}</td>
      <td>{props.categories}</td>
    </tr>
  );
}