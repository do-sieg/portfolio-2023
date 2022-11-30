import { useRouter } from "next/router";
import { useState } from "react";

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