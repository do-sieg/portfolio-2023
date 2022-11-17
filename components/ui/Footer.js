import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { DEV_FULLNAME } from "../../data/dev";
import { getCurrentYear } from "../../utils/date";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.contactLinks}>
                <a href="http://www.linkedin.com/in/daniel-orchanian" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/do-sieg" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                <a href="mailto:d.orchanian@gmail.com" target="_blank" rel="noreferrer"><FaEnvelopeSquare /></a>
            </div>
            <span>© {getCurrentYear()} {DEV_FULLNAME}</span>
        </footer>
    );
}