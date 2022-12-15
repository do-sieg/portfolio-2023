import Link from "next/link";
import { useRouter } from "next/router";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
import Credits from "../ui/Credits";
import PageCover from "../ui/PageCover";
import SubjectCard from "./SubjectCard";
import coverImg from "../../public/images/page-covers/courses-cover.jpg";
import globals from "../../styles/globals.module.css";
import styles from "./Courses.module.css";

export default function Courses({ langCourses }) {
    const { locale } = useRouter();
    const { resetRef } = useResetAnimations([locale]);
    const {
        TEXT_PHOTO_CREDITS,
        COURSES_TITLE,
        COURSES_ACTION_LEARN,
        COURSES_TEXT_INTRO_1,
        COURSES_TEXT_INTRO_2,
        COURSES_TEXT_NO_COURSE,
        COURSES_TEXT_CATEGORIES,
    } = useLang();

    function renderCategories() {
        if (Object.entries(langCourses).length === 0) {
            return <span className={styles.noResults}>{COURSES_TEXT_NO_COURSE}</span>
        }

        return Object.entries(langCourses).map(([categoryId, subjects]) => {
            return (
                <section key={categoryId} ref={resetRef}>
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
            <HeadMeta name="title" content={COURSES_TITLE} />

            <PageCover src={coverImg} alt={COURSES_TITLE} />

            <h1 ref={resetRef} className={globals.heading}>{COURSES_TITLE}</h1>

            <section ref={resetRef}>
                {COURSES_TEXT_INTRO_1}

                <Link href="/learn" className={styles.learnPrompt}>{COURSES_ACTION_LEARN}</Link>
                
                {COURSES_TEXT_INTRO_2}
            </section>

            {renderCategories()}
            
            <Credits text={TEXT_PHOTO_CREDITS} name="Olia Danilevich" link="https://www.pexels.com/@olia-danilevich/" />
        </main>
    );
}