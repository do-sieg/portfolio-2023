import { useRouter } from "next/router";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import styles from "./ReviewSlide.module.css";

export default function ReviewSlide({ review }) {
    const { locale } = useRouter();
    const { name, text, score } = review;

    return (
        <div className={styles.container}>
            <blockquote><FaQuoteLeft />{text[locale]}<FaQuoteRight /></blockquote>

            <div className={styles.score}>
                {[...Array(score)].map((el, index) => <FaStar key={index} />)}
            </div>

            <div className={styles.studentName}>{name}</div>
        </div>
    );
}
