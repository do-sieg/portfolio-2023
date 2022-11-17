import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fallback = "en";

export function useLang() {
    const { locale } = useRouter();
    // const [entries, setEntries] = useState({});
    // useEffect(() => {
    //     setEntries(require(`../lang/${getCurrentLocale()}`));
    // }, [])
    // console.log("getCurrentLocale()", getCurrentLocale());

    // useMemo ?
    // console.log(locale);
    // console.log({ entries });
    const entries = {
        ...require(`../lang/${fallback}`),
        ...require(`../lang/${locale}`)
    };
    return entries;
}