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

// export default function LangSelector({ onClick }) {
//     const { locales, locale, asPath } = useRouter();
//     const { langLinks } = useContext(PageContext);

//     return (
//         langLinks ?
//             <div className={styles.container}>
//                 {locales.map((lang) => {
//                     return <Link key={lang} href={langLinks[lang] ?? asPath} locale={lang}>
//                         <a className={lang === locale ? styles.selectedLang : null} onClick={onClick || null}>{lang}</a>
//                     </Link>;
//                 })}
//             </div>
//             : null
//     );
// }