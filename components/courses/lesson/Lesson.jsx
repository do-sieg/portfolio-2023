import Image from "next/image";
import { useRouter } from "next/router";
import { useLang } from "../../../hooks/lang";
import { useScrollRead } from "../../../hooks/scroll";
import { getReadingTime } from "../../../utils/text";
import HeadMeta from "../../meta/HeadMeta";
import BackLink from "../../ui/BackLink";
import ReadingProgress from "../../ui/ReadingProgress";
import LessonInfo from "./LessonInfo";
import globals from "../../../styles/globals.module.css";
import markdown from "../../../styles/markdown.module.css";
import styles from "./Lesson.module.css";

export default function Lesson({ lesson }) {
    const { locale } = useRouter();
    const scrolled = useScrollRead();
    const { COURSES_DATA_SUBJECTS } = useLang();

    return (
        <>
            <ReadingProgress progress={scrolled} />

            <main className={globals.pageContainer}>
                <HeadMeta name="type" content="article" />
                <HeadMeta name="title" content={lesson.data.title} />
                {lesson.data.coverImage &&
                    <HeadMeta name="image" content={process.env.NEXT_PUBLIC_HOST + lesson.data.coverImage} />
                }

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
        </>
    );
}