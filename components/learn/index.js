import Head from "next/head";
import Link from "next/link";
import { DEV_FULLNAME } from "../../data/dev";
import { reviews } from "../../data/student_reviews";
import { useLang } from "../../hooks/lang";
import Prompt, { PromptCourses } from "../ui/Prompts";
import Carousel from "../ui/Carousel";
import ReviewSlide from "./ReviewSlide";
import globals from "../../styles/globals.module.css";

export default function Learn() {
    const {
        LEARN_TITLE,
        LEARN_TITLE_TEACHING,
        LEARN_ACTION_TEACHING,
        LEARN_TEXT_INTRO,
        LEARN_TEXT_TEACHING,
    } = useLang();

    return (
        <main className={globals.pageContainer}>
            <Head>
                <title>{`${DEV_FULLNAME} - ${LEARN_TITLE}`}</title>
            </Head>

            <ul>
                <li>Erreur NextJS avec ancres</li>
                <li>Deux photos classe/online cours + Crédits</li>
                <li>Carousel</li>
            </ul>

            <h1 className={globals.heading}>{LEARN_TITLE}</h1>

            <section>
                {LEARN_TEXT_INTRO}

                <div className={globals.promptBox}>
                    <PromptCourses />
                    <Link href="#teaching"><Prompt>{LEARN_ACTION_TEACHING}</Prompt></Link>
                </div>
            </section>

            <section id="teaching">
                <h2 className={globals.subheading}>{LEARN_TITLE_TEACHING}</h2>

                {LEARN_TEXT_TEACHING}

                <Carousel autoScroll={4000}>
                    {reviews.map((review, index) => <ReviewSlide key={index} review={review} />)}
                </Carousel>
            </section>
        </main>
    );
}