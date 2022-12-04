
import Head from "next/head";
import { DEV_FULLNAME } from "../../data/dev";
import HeadMeta from "../meta/HeadMeta";
import Footer from "./Footer";
import Header from "./Header";
import HeaderBar from "./HeaderBar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <HeadMeta name="title" content={DEV_FULLNAME} />
            <HeadMeta name="type" content="website" />

            <div className={styles.container}>
                <HeaderBar />
                <Header />
                <div style={{ flex: 1 }}>{children}</div>
                <Footer />
            </div>
        </>
    );
}
