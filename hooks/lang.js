import { useRouter } from "next/router";

const FALLBACK = "en";

export function useLang() {
    const { locale } = useRouter();
    // useMemo ?
    // console.log(locale);
    // console.log({ entries });
    const entries = {
        ...require(`../lang/${FALLBACK}`),
        ...require(`../lang/${locale}`)
    };
    return entries;
}