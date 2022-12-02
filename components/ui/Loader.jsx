import { FaSpinner } from "react-icons/fa";
import styles from "./Loader.module.css";

export default function Loader({ message }) {
    return (
        <div className={styles.container}>
            {message && <span>{message}</span>}
            <div className={styles.spin}>
                <FaSpinner />
            </div>
        </div>
    );
}