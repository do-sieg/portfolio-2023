
import Head from "next/head";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div style={{ flex: 1 }}>{children}</div>
                <Footer />
            </div>
        </>
    );
}
