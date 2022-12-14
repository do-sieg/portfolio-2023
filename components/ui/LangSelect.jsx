import Link from "next/link";
import { useRouter } from "next/router";
import { useLangAltLinks } from "../../hooks/lang";
import styles from "./LangSelect.module.css";

export default function LangSelect() {
    const { locales, locale, pathname, asPath } = useRouter();
    const [langLinks] = useLangAltLinks([
        "/courses/[subject]/[slug]",
    ].includes(pathname) ? null : {});

    if (langLinks === null) return null;

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
