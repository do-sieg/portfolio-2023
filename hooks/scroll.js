import { useEffect, useState } from "react";

export function useScrollRead() {
    const [scrolled, setScrolled] = useState(0);
    
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    function handleScroll() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrolled((winScroll / height) * 100);
    }

    return scrolled;
}