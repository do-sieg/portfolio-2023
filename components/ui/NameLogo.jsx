import styles from "./NameLogo.module.css";

export default function NameLogo({ firstName, lastName, isHeading = false }) {

    function Tag({ children, className }) {
        return isHeading ? <h1 className={className}>{children}</h1> : <div className={className}>{children}</div>;
    }

    return (
        <Tag className={styles.container}>
            <span className={styles.firstName}>{firstName}</span>
            <span className={styles.lastName}>{lastName}</span>
        </Tag>
    );
}