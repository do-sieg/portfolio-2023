import Link from "next/link";
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { DEV_GITHUB, DEV_LINDEKIN } from "../../data/dev";
import styles from "./SocialBar.module.css";

export default function SocialBar() {
    return (
        <div className={styles.container}>
            <div className={styles.contactLinks}>
                <a href={DEV_LINDEKIN} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={DEV_GITHUB} target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                <Link href="/contact"><FaEnvelopeSquare /></Link>
            </div>
        </div>
    );
}