import { DEV_TECHS } from "../../data/dev";
import styles from "./SkillBadge.module.css";

export default function SkillBadge({ tech }) {
    const { name, icon } = DEV_TECHS[tech];

    return (
        <div className={styles.container}>
            {icon}
            <span>{name}</span>
        </div>
    );
}