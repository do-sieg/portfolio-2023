import styles from "./NameLogo.module.css";

export default function NameLogo({ firstName, lastName }) {
    return (
        <div className={styles.container}>
            <span className={styles.firstName}>{firstName}</span>
            <span className={styles.lastName}>{lastName}</span>
        </div>
    );
}