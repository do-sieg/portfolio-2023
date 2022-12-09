import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FALLBACK = "en";

function getLangEntries(locale) {
    return {
        ...require(`../lang/${FALLBACK}`),
        ...require(`../lang/${locale}`)
    };
}

export function useLang(timeout = 50) {
    const { locale } = useRouter();
    const [memLocale, setMemLocale] = useState(locale);
    // useMemo ?
    // console.log(locale);
    // console.log({ entries });
    setTimeout(() => {
        setMemLocale(locale);
    }, timeout);
    return getLangEntries(memLocale);
}

// Set initialLinks to null to not have any links displayed
export function useLangAltLinks(initialLinks = {}) {
    const { locale, asPath } = useRouter();
    const [langLinks, setLangLinks] = useState(initialLinks);

    useEffect(() => {
        if (initialLinks === null) {
            setLangLinks(null);
        } else {
            const links = {};
            Array.from(document.querySelectorAll("head link[hreflang]")).forEach((link) => {
                links[link.hreflang] = link.href;
            })
            setLangLinks(links);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, asPath]);

    return [langLinks, setLangLinks];
}
