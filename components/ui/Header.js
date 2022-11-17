import Link from "next/link";
import { DEV_FIRSTNAME, DEV_FULLNAME, DEV_LASTNAME } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import LangSelect from "./LangSelect";
import NameLogo from "./NameLogo";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.container}>
            <Link href="/">
                <div className={styles.nameLogoContainer}><NameLogo firstName={DEV_FIRSTNAME} lastName={DEV_LASTNAME} /></div>
            </Link>
            <LangSelect />
        </header>
    );
}
