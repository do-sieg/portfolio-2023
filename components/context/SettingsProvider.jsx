import { createContext, useEffect, useState } from "react";
import SettingsDialog from "../ui/SettingsDialog";

export const SettingsContext = createContext();

export default function SettingsProvider({ children }) {
    const [acceptSettings, setAcceptSettings] = useState();
    const [isDarkMode, setDarkMode] = useState();

    useEffect(() => {
        const storageAcceptSettings = {
            "yes": true,
            "no": false,
        }[localStorage.getItem("accept-settings")] ?? null;
        setAcceptSettings(storageAcceptSettings);

        // if (storageAcceptSettings) {
        setDarkMode({
            "on": true,
            "off": false,
        }[localStorage.getItem("dark-mode")] ?? false);
        // }
    }, []);

    useEffect(() => {
        if (acceptSettings === true) {
            localStorage.setItem("accept-settings", "yes");
        } else {
            if (acceptSettings === false) {
                localStorage.setItem("accept-settings", "no");
            }
            clearSettings();
        }
    }, [acceptSettings]);

    useEffect(() => {
        if (acceptSettings) {
            if (isDarkMode === true) {
                localStorage.setItem("dark-mode", "on");
                document.body.classList.add("dark-mode");
            } else {
                localStorage.setItem("dark-mode", "off");
                document.body.classList.remove("dark-mode");
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDarkMode]);

    function clearSettings() {
        localStorage.removeItem("dark-mode");
    }

    function resetAcceptSettings() {
        setAcceptSettings(null);
    }

    function toggleDarkMode() {
        setDarkMode(!isDarkMode);
    }

    return (
        <SettingsContext.Provider value={{
            acceptSettings,
            setAcceptSettings,
            resetAcceptSettings,
            isDarkMode,
            setDarkMode,
            toggleDarkMode,
        }}>
            {acceptSettings === null && <SettingsDialog />}
            {/* Delay children rendering to get dark mode styles */}
            {isDarkMode !== undefined && children}
        </SettingsContext.Provider>
    )
}