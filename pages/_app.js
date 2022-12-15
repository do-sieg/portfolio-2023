import SettingsProvider from "../components/context/SettingsProvider";
import Analytics from "../components/meta/Analytics";
import Layout from "../components/ui/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<SettingsProvider>
			<Layout>
				<Analytics />
				<Component {...pageProps} />
			</Layout>
		</SettingsProvider>
	);
}
