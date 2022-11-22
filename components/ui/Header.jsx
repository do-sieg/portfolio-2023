import Link from "next/link";
import { DEV_FIRSTNAME, DEV_LASTNAME } from "../../data/dev";
import MobileMenu from "./MobileMenu";
import LangSelect from "./LangSelect.jsx";
import NameLogo from "./NameLogo";
import Nav from "./Nav.jsx";
import styles from "./Header.module.css";

export default function Header() {

    return (
        <header className={styles.container}>
            <Link href="/">
                <div className={styles.nameLogoContainer}><NameLogo firstName={DEV_FIRSTNAME} lastName={DEV_LASTNAME} /></div>
            </Link>
            <Nav />
            <LangSelect />
            <MobileMenu>
                <div className={styles.mobileNav}>
                    <Nav />
                    <LangSelect />
                </div>
            </MobileMenu>
        </header>
    );
}
