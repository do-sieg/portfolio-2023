import { useRouter } from "next/router";

const FALLBACK = "en";

function getLangEntries(locale) {
    return {
        ...require(`../lang/${FALLBACK}`),
        ...require(`../lang/${locale}`)
    };
}

export function useLang() {
    const { locale } = useRouter();
    // useMemo ?
    // console.log(locale);
    // console.log({ entries });
    
    return getLangEntries(locale);
}