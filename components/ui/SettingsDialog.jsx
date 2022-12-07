import { useContext } from "react";
import { useLang } from "../../hooks/lang";
import { SettingsContext } from "../context/SettingsProvider";
import Prompt from "./Prompts";
import styles from "./SettingsDialog.module.css";

export default function SettingsDialog() {
    const { setAcceptSettings } = useContext(SettingsContext);
    const { ACTION_ACCEPT, ACTION_REFUSE, TEXT_ACCEPT_SETTINGS } = useLang();

    function handleAccept(e) {
        e.preventDefault();
        setAcceptSettings(true);
    }

    function handleRefuse(e) {
        e.preventDefault();
        setAcceptSettings(false);
    }

    return (
        <>
            <div className={styles.container}>
                {TEXT_ACCEPT_SETTINGS}
                <div className={styles.actions}>
                    <Prompt onClick={handleAccept}>{ACTION_ACCEPT}</Prompt>
                    <Prompt onClick={handleRefuse}>{ACTION_REFUSE}</Prompt>
                </div>
            </div>
        </>
    );
}