import Link from "next/link";
import { DEV_FIRSTNAME, DEV_LASTNAME } from "../../data/dev";
import Nav from "./Nav.jsx";
import MobileMenu from "./MobileMenu";
import LangSelect from "../ui/LangSelect.jsx";
import NameLogo from "../ui/NameLogo";
import ThemeIcon from "../ui/ThemeIcon";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.container}>
            <Link href="/">
                <div className={styles.nameLogoContainer}><NameLogo firstName={DEV_FIRSTNAME} lastName={DEV_LASTNAME} /></div>
            </Link>

            <Nav />
            <LangSelect />
            <ThemeIcon />

            <MobileMenu>
                <div className={styles.mobileNav}>
                    <Nav />
                    <div className={styles.mobileUserSettings}>
                        <LangSelect />
                        <ThemeIcon />
                    </div>
                </div>
            </MobileMenu>
        </header>
    );
}
