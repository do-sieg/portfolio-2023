import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { DEV_GITHUB, DEV_LINDEKIN } from "../../data/dev";
import styles from "./HeaderBar.module.css";

function useDarkMode() {
    // STOCKAGE DANS UN SECOND TEMPS
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        console.log({ isDarkMode });
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    return [isDarkMode, setDarkMode];
}

export default function HeaderBar() {
    const [isDarkMode, setDarkMode] = useDarkMode();
    const ModeIcon = isDarkMode ? MdLightMode : MdModeNight;

    return (
        <div className={styles.container}>
            <div className={styles.contactLinks}>
                <a href={DEV_LINDEKIN} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={DEV_GITHUB} target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                <Link href="/contact"><FaEnvelopeSquare /></Link>
            </div>
            <div className={styles.userSettings}>
                <ModeIcon style={{ cursor: "pointer" }} onClick={() => setDarkMode(!isDarkMode)} />
            </div>
        </div>
    );
}