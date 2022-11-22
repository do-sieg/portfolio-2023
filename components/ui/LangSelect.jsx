import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./LangSelect.module.css";

export default function LangSelect() {
    const { locales, locale, asPath } = useRouter();

    return (
        <div className={styles.container}>
            {locales.map((lang) => {
                return <Link key={lang} href={asPath} locale={lang} className={lang === locale ? styles.selected : ""}>{lang}</Link>;
            })}
        </div>
    );
}
