import styles from "./SkillsList.module.css";

export default function SkillsList({elements = []}) {

    return (
        <div className={styles.container}>
            {elements.map(({ name, icon }, index) => {
                return (
                    <div key={index} className={styles.tech}>
                        {icon}
                        <span>{name}</span>
                    </div>
                );
            })}
        </div>
    );
}