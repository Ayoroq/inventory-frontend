import styles from '../styles.module.css'
import { useNavigate } from 'react-router';
export default function Home(){
    const navigate = useNavigate();
    return(
        <div className={styles.home}>
            <p>Welcome to the book inventory</p>
            <button className={`${styles.homeBooksBtn} ${styles.btn}`} onClick={() => navigate('/books')}>Click here to see the books</button>
        </div>
    )
}