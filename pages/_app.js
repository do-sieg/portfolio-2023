import { GoogleAnalytics } from "nextjs-google-analytics";
import SettingsProvider from "../components/context/SettingsProvider";
import Layout from "../components/ui/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<SettingsProvider>
			<Layout>
				<GoogleAnalytics
					gaMeasurementId="G-446BYMFFEK"
					trackPageViews={{ ignoreHashChange: true }}
				/>
				<Component {...pageProps} />
			</Layout>
		</SettingsProvider>
	);
}
