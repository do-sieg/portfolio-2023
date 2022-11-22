import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { DEV_EMAIL, DEV_FULLNAME, DEV_GITHUB, DEV_LINDEKIN } from "../../data/dev";
import { getCurrentYear } from "../../utils/date";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.contactLinks}>
                <a href={DEV_LINDEKIN} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={DEV_GITHUB} target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                <a href={`mailto:${DEV_EMAIL}`} target="_blank" rel="noreferrer"><FaEnvelopeSquare /></a>
            </div>
            <span>© {getCurrentYear()} {DEV_FULLNAME}</span>
        </footer>
    );
}