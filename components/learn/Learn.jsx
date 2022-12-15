import { useRouter } from "next/router";
import cn from "classnames";
import { DEV_TEACH_LINKS } from "../../data/dev";
import { reviews } from "../../data/student_reviews";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
import Prompt, { PromptContact, PromptLinkedIn } from "../ui/Prompts";
import Carousel from "../ui/Carousel";
import Credits from "../ui/Credits";
import PageCover from "../ui/PageCover";
import ReviewSlide from "./ReviewSlide";
import { FaExternalLinkAlt } from "react-icons/fa";
import coverImg from "../../public/images/page-covers/learn-cover.jpg";
import globals from "../../styles/globals.module.css";
import styles from "./Learn.module.css";

export default function Learn() {
    const { locale } = useRouter();
    const { resetRef } = useResetAnimations([locale]);
    const {
        TEXT_PHOTO_CREDITS,
        LEARN_TITLE,
        LEARN_TITLE_TEACHING,
        LEARN_TEXT_INTRO,
        LEARN_TEXT_TEACHING,
    } = useLang();

    return (
        <main className={globals.pageContainer}>
            <HeadMeta name="title" content={LEARN_TITLE} />

            <PageCover src={coverImg} alt={LEARN_TITLE} />

            <h1 ref={resetRef} className={globals.heading}>{LEARN_TITLE}</h1>

            <section ref={resetRef}>
                {LEARN_TEXT_INTRO}

                <div className={styles.reviewsContainer}>
                    <Carousel autoScroll={10000}>
                        {reviews.map((review, index) => <ReviewSlide key={index} review={review} />)}
                    </Carousel>
                </div>
            </section>

            <section ref={resetRef}>
                <h2 className={globals.subheading}>{LEARN_TITLE_TEACHING}</h2>

                {LEARN_TEXT_TEACHING}

                <div className={globals.promptBox}>
                    {Object.entries(DEV_TEACH_LINKS).map(([key, link]) => {
                        return <a key={key} href={link} target="_blank" rel="noreferrer"><Prompt>{key}<FaExternalLinkAlt /></Prompt></a>
                    })}
                    <PromptLinkedIn />
                    <PromptContact />
                </div>
            </section>

            <Credits text={TEXT_PHOTO_CREDITS} name="Andrea Piacquadio" link="https://www.pexels.com/@olly/" />
        </main>
    );
}