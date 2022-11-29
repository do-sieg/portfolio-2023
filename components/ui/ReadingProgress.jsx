import styles from "./ReadingProgress.module.css";

export default function ReadingProgress({ progress = 0 }) {
    return (
        <div className={`${styles.container} ${progress === 100 ? styles.full : ""}`}>
            <div className={styles.bar} style={{ width: `${progress}%` }} />
        </div>
    );
}