import { Link } from "react-router";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <Link to={"/"} className={styles.logo}>
                V's Hotel
            </Link>

            <div className={styles.headerRight}>
                <div className={styles.headerRight}>
                    <Link to={"/admin"} className={styles.btn}>Admin</Link>
                </div>
            </div>
        </div>
    );
}
