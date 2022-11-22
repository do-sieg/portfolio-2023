import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import styles from "./BackLink.module.css";

export default function BackLink({ children, href }) {
    return (
        <Link className={styles.container} href={href}>
            <FaChevronLeft />{children}
        </Link>
    );
}