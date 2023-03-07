import Image from "next/image";
import { DEV_FULLNAME } from "../../../data/dev";
import { useLang } from "../../../hooks/lang";
import profilePic from "../../../public/images/dev-profile-light.jpg";
import styles from "./LessonInfo.module.css";

export default function LessonInfo({ readingTime }) {
    const { TEXT_READING_TIME } = useLang();

    return (
        <div className={styles.container}>
            <Image className={styles.profilePic} src={profilePic} alt={DEV_FULLNAME} placeholder="blur" />
            <div className={styles.rightPanel}>
                <div className={styles.name}>{DEV_FULLNAME}</div>
                {readingTime && TEXT_READING_TIME(readingTime)}
            </div>
        </div>
    );
}