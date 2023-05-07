import { DEV_LINDEKIN } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import { FaLinkedin, FaRocket } from "react-icons/fa";
import { PromptLinkedIn } from "../ui/Prompts";
import SkillBadge from "./SkillBadge";
import styles from "./HomeCard.module.css";

export default function HomeCardDev() {
    const { HOME_TITLE_DEV, HOME_TEXT_INTRO_DEV } = useLang();

    return (
        <div className={`${styles.container} ${styles.blue}`}>
            <div className={styles.leftPanel}>
                <h2>{HOME_TITLE_DEV}</h2>
                {HOME_TEXT_INTRO_DEV}
                <div className={styles.actions}>
                    <PromptLinkedIn />
                </div>
            </div>
            <div className={styles.rightPanel}>
                <div className={styles.backgroundIcon}><FaRocket /></div>
                <div className={styles.sideContent}>
                    <div className={styles.skillGrid}>
                        <SkillBadge tech="html" />
                        <SkillBadge tech="css" />
                        <SkillBadge tech="js" />
                        <SkillBadge tech="react" />
                        <SkillBadge tech="node" />
                        <SkillBadge tech="next" />
                        <SkillBadge tech="mysql" />
                        <SkillBadge tech="maria" />
                        <SkillBadge tech="mongo" />
                        <SkillBadge tech="redux" />
                        <SkillBadge tech="git" />
                    </div>
                </div>
            </div>
        </div>
    );
}
