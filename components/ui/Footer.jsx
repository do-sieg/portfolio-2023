import Link from "next/link";
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { DEV_FULLNAME, DEV_GITHUB, DEV_LINDEKIN } from "../../data/dev";
import { getCurrentYear } from "../../utils/date";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.contactLinks}>
                <a href={DEV_LINDEKIN} aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={DEV_GITHUB} aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                <Link href="/contact" aria-label="Contact"><FaEnvelopeSquare /></Link>
            </div>
            <span className={styles.copyright}>© {getCurrentYear()} {DEV_FULLNAME}</span>
        </footer>
    );
}