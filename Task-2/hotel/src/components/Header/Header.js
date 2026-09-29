import { Link } from "react-router";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                V's Hotel
            </Link>

            <nav className={styles.headerRight}>
                <Link to="/admin" className={styles.adminBtn}>
                    Admin
                </Link>
            </nav>
        </header>
    );
}
