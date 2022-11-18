import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ children, allowControl = true, autoScroll = 0 }) {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        let timeout;
        if (autoScroll > 0) {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(handleSlideNext, autoScroll);
        }
        return function cleanup() {
            if (timeout) clearTimeout(timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideIndex]);

    function loopIndex(value) {
        setSlideIndex((value + children.length) % children.length);
    }

    function handleSlidePrev() { loopIndex(slideIndex - 1); }
    function handleSlideNext() { loopIndex(slideIndex + 1); }

    return (
        <div className={styles.container}>
            <div className={styles.slidesContainer} style={{ gridTemplateColumns: `repeat(${children.length}, 100%)`, left: `-${slideIndex * 100}%` }}>
                {children}
            </div>
            <div className={styles.navDots}>
                {[...Array(children.length)].map((el, index) => {
                    return <button
                        key={index}
                        className={index === slideIndex ? styles.activeDot : ""}
                        onClick={() => setSlideIndex(index)}
                        disabled={!allowControl}>
                        &#11044;
                    </button>
                })}
            </div>
            {allowControl && (
                <>
                    <button className={styles.leftArrow} onClick={handleSlidePrev}>&#10094;</button>
                    <button className={styles.rightArrow} onClick={handleSlideNext}>&#10095;</button>
                </>)
            }
        </div>
    );
}
