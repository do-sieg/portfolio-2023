import Head from "next/head";
import { DEV_FULLNAME } from "../../../data/dev";
import { useLang } from "../../../hooks/lang";
import BackLink from "../../ui/BackLink";
import LessonCard from "./LessonCard";
import globals from "../../../styles/globals.module.css";
import styles from "./Subject.module.css";

export default function Subject({ subject, lessonTree }) {
    const { COURSES_ACTION_ALL_COURSES, COURSES_DATA_SUBJECTS } = useLang();

    return (
        <main className={globals.pageContainer}>
            <Head>
                <title>{`${DEV_FULLNAME} - ${COURSES_DATA_SUBJECTS[subject].name}`}</title>
            </Head>

            <BackLink href="/courses">{COURSES_ACTION_ALL_COURSES}</BackLink>

            <h1 className={globals.heading}>{COURSES_DATA_SUBJECTS[subject].name}</h1>

            <section>{COURSES_DATA_SUBJECTS[subject].intro}</section>

            {Object.entries(lessonTree).map(([sectionId, lessons]) => {
                return (
                    <section key={sectionId}>
                        <h2 className={globals.subheading}>{COURSES_DATA_SUBJECTS[subject].subSections[sectionId]}</h2>
                        <div className={styles.cardGrid}>
                            {lessons.map(data => <LessonCard key={data.number} subject={subject} data={data} />)}
                        </div>
                    </section>
                );
            })}
        </main>
    );
}