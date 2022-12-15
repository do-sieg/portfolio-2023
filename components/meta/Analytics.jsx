import { useContext } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { SettingsContext } from "../context/SettingsProvider";

export default function Analytics() {
    const { acceptSettings } = useContext(SettingsContext);

    return <GoogleAnalytics trackPageViews={acceptSettings ? { ignoreHashChange: true } : false} />
}