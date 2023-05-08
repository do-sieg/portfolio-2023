import { useContext } from "react";
import { SettingsContext } from "../context/SettingsProvider";
import { MdLightMode, MdModeNight } from "react-icons/md";
import styles from "./ThemeIcon.module.css";

export default function ThemeIcon() {
    const { acceptSettings, resetAcceptSettings, isDarkMode, toggleDarkMode } = useContext(SettingsContext);
    const ModeIcon = isDarkMode ? MdLightMode: MdModeNight;

    return <ModeIcon className={styles.container} onClick={acceptSettings ? toggleDarkMode : resetAcceptSettings} />
}