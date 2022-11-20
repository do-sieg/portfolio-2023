import Link from "next/link";
import { useLang } from "../../hooks/lang";
import styles from "./SubjectCard.module.css";

export default function SubjectCard({ subjectId, lessonAmount }) {
    const { COURSES_TEXT_SUBJECTS, COURSES_TEXT_LESSON_AMOUNT } = useLang();

    return (
        <Link href={`/learn/courses/${subjectId}`} >
            <div className={styles.container}>
                <div className={styles.title}>{COURSES_TEXT_SUBJECTS[subjectId].name}</div>
                <div className={styles.description}>{COURSES_TEXT_SUBJECTS[subjectId].desc}</div>
                <div className={styles.action}>{COURSES_TEXT_LESSON_AMOUNT(lessonAmount)}</div>
            </div>
        </ Link>
    );
}