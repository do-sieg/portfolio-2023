import { useRouter } from "next/router";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import styles from "./ReviewSlide.module.css";

export default function ReviewSlide({ review, shortened = false }) {
    const { locale } = useRouter();
    const { name, long, short, score } = review;

    return (
        <div className={styles.container}>
            <blockquote><FaQuoteLeft />{shortened ? short[locale] : long[locale]}<FaQuoteRight /></blockquote>

            <div className={styles.score}>
                {[...Array(score)].map((el, index) => <FaStar key={index} />)}
            </div>

            <div className={styles.studentName}>{name}</div>
        </div>
    );
}
