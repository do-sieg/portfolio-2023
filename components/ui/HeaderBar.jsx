import Link from "next/link";
import { useContext } from "react";
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { DEV_GITHUB, DEV_LINDEKIN } from "../../data/dev";
import { SettingsContext } from "../context/SettingsProvider";
import styles from "./HeaderBar.module.css";

export default function HeaderBar() {
    const { acceptSettings, resetAcceptSettings, isDarkMode, toggleDarkMode } = useContext(SettingsContext);
    const ModeIcon = isDarkMode ? MdLightMode : MdModeNight;

    return (
        <div className={styles.container}>
            <div className={styles.contactLinks}>
                <a href={DEV_LINDEKIN} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={DEV_GITHUB} target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                <Link href="/contact"><FaEnvelopeSquare /></Link>
            </div>
            <div className={styles.userSettings}>
                <ModeIcon style={{ cursor: "pointer", userSelect: "none" }} onClick={acceptSettings ? toggleDarkMode : resetAcceptSettings} />
            </div>
        </div>
    );
}