import styles from '../styles.module.css'
import { Link } from 'react-router';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo} >
        <Link to="/"> Inventory</Link>
      </div>
      <div className={styles.links}>
        <Link to="/books">Books</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </div>
  );
}