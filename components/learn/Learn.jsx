import { useRouter } from "next/router";
import { DEV_TECHS, DEV_TEACH_LINKS } from "../../data/dev";
import { reviews } from "../../data/student_reviews";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
import { PromptContact, PromptLinkedIn } from "../ui/Prompts";
import SkillsList from "../ui/SkillsList";
import Carousel from "../ui/Carousel";
import Credits from "../ui/Credits";
import PageCover from "../ui/PageCover";
import ReviewSlide from "./ReviewSlide";
import { FaExternalLinkAlt } from "react-icons/fa";
import coverImg from "../../public/images/page-covers/learn-cover.webp";
import coverImgSmall from "../../public/images/page-covers/learn-cover-sm.webp";
import globals from "../../styles/globals.module.css";
import promptStyles from "../ui/Prompts.module.css";
import styles from "./Learn.module.css";

const { html, css, js, react, node, next, mysql, maria, php, git, seo } = DEV_TECHS;

export default function Learn() {
    const { locale } = useRouter();
    const { resetRef } = useResetAnimations([locale]);
    const {
        TEXT_PHOTO_CREDITS,
        LEARN_TITLE,
        LEARN_TITLE_TEACHING,
        LEARN_TEXT_INTRO,
        LEARN_TEXT_TEACHING,
        LEARN_TEXT_CONTACT,
    } = useLang();

    return (
        <main className={globals.pageContainer}>
            <HeadMeta name="title" content={LEARN_TITLE} />

            <PageCover src={coverImg} srcSmall={coverImgSmall} alt={LEARN_TITLE} />

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
                
                <SkillsList elements={[html, css, js, react, node, next]} />
                <SkillsList elements={[mysql, maria, php, git, seo]} />

                {LEARN_TEXT_CONTACT}

                <div className={globals.promptBox}>
                    {Object.entries(DEV_TEACH_LINKS).map(([key, link]) => {
                        return <a key={key} className={promptStyles.container} href={link} target="_blank" rel="noreferrer">{key}<FaExternalLinkAlt /></a>
                    })}
                    <PromptLinkedIn />
                    <PromptContact />
                </div>
            </section>

            <Credits text={TEXT_PHOTO_CREDITS} name="Andrea Piacquadio" link="https://www.pexels.com/@olly/" />
        </main>
    );
}