import Link from "next/link";
import { useLang } from "../../hooks/lang";
import styles from "./Nav.module.css";

export default function Nav() {
    const {
        NAV_ACTION_LEARN,
        NAV_ACTION_COURSES,
        NAV_ACTION_PROJECTS,
        NAV_ACTION_BLOG,
    } = useLang();

    return (
        <nav className={styles.container}>
            <ul>
                <li><Link href="/learn">{NAV_ACTION_LEARN}</Link></li>
                <li className={styles.newContent}><Link href="/courses">{NAV_ACTION_COURSES}</Link></li>
                <li><Link href="/projects">{NAV_ACTION_PROJECTS}</Link></li>
                <li className={styles.newContent}><Link href="/blog">{NAV_ACTION_BLOG}</Link></li>
            </ul>
        </nav>
    );
}