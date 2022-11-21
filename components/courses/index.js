import Head from "next/head";
import { DEV_FULLNAME } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import SubjectCard from "./SubjectCard";
import globals from "../../styles/globals.module.css";
import styles from "./Courses.module.css";

export default function Courses({ langCourses }) {
    const {
        COURSES_TITLE,
        COURSES_TEXT_INTRO,
        COURSES_TEXT_NO_COURSE,
        COURSES_TEXT_CATEGORIES,
    } = useLang();

    function renderCategories() {
        if (Object.entries(langCourses).length === 0) {
            return <span className={styles.noResults}>{COURSES_TEXT_NO_COURSE}</span>
        }

        return Object.entries(langCourses).map(([categoryId, subjects]) => {
            return (
                <section key={categoryId}>
                    <h2 className={globals.subheading}>{COURSES_TEXT_CATEGORIES[categoryId]}</h2>
                    <div className={styles.cardsContainer}>
                        {Object.entries(subjects).map(([subjectId, amount]) => {
                            return <SubjectCard key={subjectId} subjectId={subjectId} lessonAmount={amount} />;
                        })}
                    </div>
                </section>
            );
        });
    }

    return (
        <main className={globals.pageContainer}>
            <Head>
                <title>{`${DEV_FULLNAME} - ${COURSES_TITLE}`}</title>
            </Head>

            <h1 className={globals.heading}>{COURSES_TITLE}</h1>

            <section>
                {COURSES_TEXT_INTRO}
            </section>

            {renderCategories()}
        </main>
    );
}