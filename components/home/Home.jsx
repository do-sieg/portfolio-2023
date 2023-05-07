import { useRouter } from "next/router";
import { DEV_FULLNAME } from "../../data/dev";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
import Hero from "./Hero";
import HomeCardDev from "./HomeCardDev";
import HomeCardTeach from "./HomeCardTeach";
import globals from "../../styles/globals.module.css";
import styles from "./Home.module.css";

export default function Home() {
    const { locale } = useRouter();
    const { resetRef } = useResetAnimations([locale]);
    const { TEXT_DEV_JOBS } = useLang();

    return (
        <main className={`${styles.container} ${globals.pageContainer}`}>
            <HeadMeta name="title" content={`${DEV_FULLNAME} - ${TEXT_DEV_JOBS}`} />

            <div className={styles.heroContainer}>
                <Hero />
            </div>

            <section ref={resetRef}><HomeCardDev /></section>
            <section ref={resetRef}><HomeCardTeach /></section>
        </main>
    );
}
