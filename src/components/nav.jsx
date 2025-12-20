import styles from '../styles.module.css'

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo} >
        <a href="/"> Inventory</a>
      </div>
      <div className={styles.links}>
        <a href="/books">Books</a>
        <a href="/categories">Categories</a>
      </div>
    </div>
  );
}