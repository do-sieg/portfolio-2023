import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ children }) {
    const { locale, asPath } = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("mobile-menu-visible");
        } else {
            document.body.classList.remove("mobile-menu-visible");
        }
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [locale, asPath])

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <button className={styles.toggleButton} aria-label="Menu" onClick={handleToggleMenu}>{isMenuOpen ? <FaTimes /> : <FaBars />}</button>
            {isMenuOpen && <div className={styles.menuContainer}>{children}</div>}
        </>
    );
}