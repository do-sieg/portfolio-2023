import Head from "next/head";
import { useRouter } from "next/router";

export default function HeadLocaleAlt({ lang, href }) {
    const { locale } = useRouter();

    return (
        <Head>
            <link key={`lang-alt-${lang}`} rel="alternate" hrefLang={lang} href={href} />
            {lang === locale ?
                <meta property="og:locale" content={lang} key="og:locale" />
                :
                <meta property="og:locale:alternate" content={lang} key={`og:locale:alternate-${lang}`} />
            }
        </Head>
    );
}