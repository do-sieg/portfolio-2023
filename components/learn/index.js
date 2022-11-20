import Head from "next/head";
import Image from "next/image";
import { DEV_FULLNAME, DEV_TEACH_LINKS } from "../../data/dev";
import { reviews } from "../../data/student_reviews";
import { useLang } from "../../hooks/lang";
import Prompt, { PromptCourses } from "../ui/Prompts";
import Carousel from "../ui/Carousel";
import Credits from "../ui/Credits";
import ReviewSlide from "./ReviewSlide";
import { FaChalkboardTeacher, FaExternalLinkAlt } from "react-icons/fa";
import learnCover from "../../public/images/learn-cover.jpg";
import globals from "../../styles/globals.module.css";
import styles from "./Learn.module.css";

export default function Learn() {
    const {
        TEXT_PHOTO_CREDITS,
        LEARN_TITLE,
        LEARN_TITLE_TEACHING,
        LEARN_TEXT_INTRO,
        LEARN_TEXT_TEACHING,
    } = useLang();

    return (
        <main className={globals.pageContainer}>
            <Head>
                <title>{`${DEV_FULLNAME} - ${LEARN_TITLE}`}</title>
            </Head>

            <Image className={styles.coverImage} src={learnCover} alt={LEARN_TITLE} placeholder="blur" />

            <h1 className={globals.heading}>{LEARN_TITLE}</h1>

            <section>
                {LEARN_TEXT_INTRO}

                <div className={styles.promptBoxBig}>
                    <PromptCourses />
                </div>
            </section>

            <section id="teaching">
                <h2 className={globals.subheading}>{LEARN_TITLE_TEACHING}</h2>

                {LEARN_TEXT_TEACHING}

                <div className={globals.promptBox}>
                    {Object.entries(DEV_TEACH_LINKS).map(([key, link]) => {
                        return <a key={key} href={link} target="_blank" rel="noreferrer"><Prompt>{key}<FaExternalLinkAlt /></Prompt></a>
                    })}
                </div>

                <div className={styles.reviewsContainer}>
                    <Carousel autoScroll={10000}>
                        {reviews.map((review, index) => <ReviewSlide key={index} review={review} />)}
                    </Carousel>
                </div>

            </section>

            <Credits text={TEXT_PHOTO_CREDITS} name="Olia Danilevich" link="https://www.pexels.com/@olia-danilevich/" />
        </main>
    );
}