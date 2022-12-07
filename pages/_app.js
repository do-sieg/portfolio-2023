import SettingsProvider from "../components/context/SettingsProvider";
import Layout from "../components/ui/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<SettingsProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SettingsProvider>
	);
}
