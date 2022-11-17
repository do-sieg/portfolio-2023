import styles from "./Prompt.module.css";

export default function Prompt({ children }) {
    return <button className={styles.container}>{children}</button>
}