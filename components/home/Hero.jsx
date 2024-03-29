import Image from "next/image";
import { DEV_FIRSTNAME, DEV_FULLNAME, DEV_LASTNAME } from "../../data/dev";
import NameLogo from "../ui/NameLogo";
import { PromptContact, PromptResume } from "../ui/Prompts";
import profilePic from "../../public/images/dev-profile-sm.webp";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <div className={styles.container}>
            <Image src={profilePic} alt={DEV_FULLNAME} placeholder="blur" priority />

            <div className={styles.rightContainer}>
                <NameLogo firstName={DEV_FIRSTNAME} lastName={DEV_LASTNAME} isHeading />
                <div className={styles.promptsContainer}>
                    <PromptContact />
                    <PromptResume />
                </div>
            </div>

        </div>
    );
}