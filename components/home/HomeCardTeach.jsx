import { studentReviews } from "../../data/student_reviews";
import { useLang } from "../../hooks/lang";
import { FaGraduationCap } from "react-icons/fa";
import { PromptSuperprof } from "../ui/Prompts";
import styles from "./HomeCard.module.css";
import ReviewSlide from "../learn/ReviewSlide";
import { useEffect, useState } from "react";


export default function HomeCardTeach() {
    const { HOME_TITLE_TEACH, HOME_TEXT_INTRO_TEACH, HOME_FIRST_HOUR_FREE } = useLang();
    const [displayedReview, setDisplayedReview] = useState(null);
    
    useEffect(() => {
        setDisplayedReview([
            studentReviews.jordan,
            studentReviews.florian,
            studentReviews.matis,
        ][Math.floor(Math.random() * 3)]);
    }, []);


    return (
        <div className={`${styles.container} ${styles.pink}`}>
            <div className={styles.leftPanel}>
                <h2>{HOME_TITLE_TEACH}</h2>
                {HOME_TEXT_INTRO_TEACH}
                <div className={styles.actions}>
                    <PromptSuperprof />
                </div>
                <div className={styles.specialOfferBadge}>{HOME_FIRST_HOUR_FREE}</div>
            </div>
            <div className={styles.rightPanel}>
                <div className={styles.backgroundIcon}><FaGraduationCap /></div>
                <div className={styles.sideContent}>
                    {displayedReview && <ReviewSlide review={displayedReview} shortened />}
                </div>
            </div>
        </div>
    );
}
