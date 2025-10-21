import styles from "./styles.module.css"
import { Link } from "react-router-dom";


function NavBar() {
    return <nav className={styles["navbar"]}>
        <div className={styles["navbar-brand"]}>
            <Link to="/">Movie App</Link>
        </div>
        <div className={styles["navbar-links"]}>
            <Link to="/" className={styles["nav-link"]}>Home</Link>
            <Link to="/favorites" className={styles["nav-link"]}>Favorites</Link>
        </div>
    </nav>
}

export default NavBar