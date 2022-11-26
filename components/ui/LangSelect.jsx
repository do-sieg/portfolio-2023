import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./LangSelect.module.css";

export default function LangSelect() {
    const { locales, locale, asPath } = useRouter();
    const [langLinks, setLangLinks] = useState({});

    useEffect(() => {
        const links = {};
        Array.from(document.querySelectorAll("head link[hreflang]")).forEach((link) => {
            links[link.hreflang] = link.href;
        })
        setLangLinks(links);
    }, [locale, asPath]);

    return (
        <div className={styles.container}>
            {Object.keys(langLinks).length > 0 ?
                locales.filter(lang => Object.keys(langLinks).includes(lang)).map((lang) => {
                    return <Link key={lang} href={langLinks[lang]} locale={lang} className={lang === locale ? styles.selected : ""}>{lang}</Link>;
                })
                :
                locales.map((lang) => {
                    return <Link key={lang} href={asPath} locale={lang} className={lang === locale ? styles.selected : ""}>{lang}</Link>;
                })}
        </div>
    );
}
