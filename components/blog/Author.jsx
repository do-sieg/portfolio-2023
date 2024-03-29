import Image from "next/image";
import { DEV_FULLNAME } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import profilePic from "../../public/images/dev-profile-sm.webp";
import styles from "./Author.module.css";

export default function Author() {
    const { BLOG_TEXT_AUTHOR_DESC } = useLang();

    return (
        <div className={styles.container}>
            <Image className={styles.profilePic} src={profilePic} alt={DEV_FULLNAME} placeholder="blur" />
            <div className={styles.rightPanel}>
                <div className={styles.authorDesc}>{BLOG_TEXT_AUTHOR_DESC}</div>
            </div>
        </div>
    );
}