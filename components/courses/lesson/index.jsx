import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { DEV_FULLNAME } from "../../../data/dev";
import { useLang } from "../../../hooks/lang";
import { getReadingTime } from "../../../utils/text";
import BackLink from "../../ui/BackLink";
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

            <BackLink href={`/courses/${lesson.data.subjectId}`}>{COURSES_DATA_SUBJECTS[lesson.data.subjectId].name}</BackLink>

            <h1 className={[globals.heading, styles.heading].join(" ")}>{lesson.data.title}</h1>

            <div className={styles.infoContainer}>
                <LessonInfo readingTime={getReadingTime(locale, lesson.content)} />
            </div>

            <div className={styles.coverImageContainer}>
                <Image src={lesson.data.coverImage} alt={lesson.data.title} fill priority />
            </div>

            <div className={markdown.container} dangerouslySetInnerHTML={{ __html: lesson.html }} />
        </main>
    );
}