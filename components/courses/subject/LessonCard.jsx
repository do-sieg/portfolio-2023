import Link from "next/link";
import { useLang } from "../../../hooks/lang";
import styles from "./LessonCard.module.css";

export default function LessonCard({ subject, data }) {
    const { COURSES_TEXT_LEVELS, COURSES_DATA_SUBJECTS } = useLang();

    return (
        <Link href={`/courses/${subject}/${data.slug}`}>
        <div className={styles.container}>
            <div className={styles.heading}>
                <span className={styles.number}>{COURSES_DATA_SUBJECTS[subject].name} {data.number}</span>
                <span className={`${styles.level} ${styles[data.level]}`}>{COURSES_TEXT_LEVELS[data.level]}</span>
            </div>
            <div className={styles.body}>{data.title}</div>
        </div>
        </Link>
    );
}