import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";
import { DEV_FULLNAME } from "../../../data/dev";
import { useLang } from "../../../hooks/lang";
import { getReadingTime } from "../../../utils/text";
import LessonInfo from "./LessonInfo";
import globals from "../../../styles/globals.module.css";
import markdown from "../../../styles/markdown.module.css";
import styles from "./Lesson.module.css";

export default function Lesson({ lesson }) {
    const { locale } = useRouter();
    const { COURSES_DATA_SUBJECTS } = useLang();

    return (
        <main className={globals.pageContainer}>
            <Head>
                <title>{`${DEV_FULLNAME} - ${lesson.data.title}`}</title>
            </Head>

            <ul>
                <li>images cliquables</li>
            </ul>

            <Link className={styles.backLink} href={`/learn/courses/${lesson.data.subjectId}`}>
                <FaChevronLeft />
                {COURSES_DATA_SUBJECTS[lesson.data.subjectId].name}
            </Link>

            <h1 className={[globals.heading, styles.heading].join(" ")}>{lesson.data.title}</h1>

            <div className={styles.infoContainer}>
                <LessonInfo readingTime={getReadingTime(locale, lesson.content)} />
            </div>

            <div className={styles.coverImageContainer}>
                <Image src={lesson.data.coverImage} alt={lesson.data.title} fill />
            </div>

            <div className={markdown.container} dangerouslySetInnerHTML={{ __html: lesson.html }} />
        </main>
    );
}