
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
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
                {children}
                <Footer />
            </div>
        </>
    );
}
