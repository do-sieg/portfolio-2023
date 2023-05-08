import { useRouter } from "next/router";
import { DEV_TECHS } from "../../data/dev";
import { studentReviews } from "../../data/student_reviews";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
import SkillsList from "./SkillsList";
import Credits from "../ui/Credits";
import PageCover from "../ui/PageCover";
import ActionCardTeach from "../action/ActionCardTeach";
import ReviewSlide from "./ReviewSlide";
import coverImg from "../../public/images/page-covers/learn-cover.webp";
import coverImgSmall from "../../public/images/page-covers/learn-cover-sm.webp";
import globals from "../../styles/globals.module.css";
import styles from "./Learn.module.css";

const { html, css, js, react, redux, node, next, mysql, maria, php, git, seo } = DEV_TECHS;

export default function Learn() {
    const { locale } = useRouter();
    const { resetRef } = useResetAnimations([locale]);
    const {
        TEXT_PHOTO_CREDITS,
        LEARN_TITLE,
        LEARN_TITLE_REVIEWS,
        LEARN_TEXT_INTRO,
        LEARN_TEXT_OPENCLASSROOMS,
    } = useLang();

    return (
        <main className={globals.pageContainer}>
            <HeadMeta name="title" content={LEARN_TITLE} />

            <PageCover src={coverImg} srcSmall={coverImgSmall} alt={LEARN_TITLE} />

            <h1 ref={resetRef} className={globals.heading}>{LEARN_TITLE}</h1>

            <section ref={resetRef}>
                {LEARN_TEXT_INTRO}

                <SkillsList elements={[html, css, js, react, redux, node, next]} />
                <SkillsList elements={[mysql, maria, php, git, seo]} />

                {LEARN_TEXT_OPENCLASSROOMS}
            </section>

            <section ref={resetRef}><ActionCardTeach /></section>

            <section ref={resetRef}>
                <h2 className={globals.subheading}>{LEARN_TITLE_REVIEWS}</h2>

                <div className={styles.reviewsList}>
                    {Object.values(studentReviews).map((review, index) => {
                        return (
                            <div key={index} className={styles.reviewSlideContainer}>
                                <ReviewSlide review={review} />
                            </div>
                        );
                    })}
                </div>
            </section>

            <Credits text={TEXT_PHOTO_CREDITS} name="Andrea Piacquadio" link="https://www.pexels.com/@olly/" />
        </main>
    );
}