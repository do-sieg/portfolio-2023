export function getReadingTime(locale, text) {
    const averageWordsPerMinute = {
        fr: 195,
        en: 228,
    }[locale];
    if (!averageWordsPerMinute) {
        console.error(`Reading time: unknown locale [${locale}].`);
        return 0;
    }
    if (!text) {
        console.error(`Reading time: no text was provided. Got: [${text}].`);
        return 0;
    }
    const wordCount = text.replace(/[^\w ]/g, "").split(/\s+/).length;
    return Math.ceil(wordCount / averageWordsPerMinute);
}