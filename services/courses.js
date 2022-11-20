import fs from "fs";
import path from "path";

const COURSE_CATEGORIES = {
    WEB_LANGUAGES: ["html", "css"],
}

export function getAvailableCourseSubjects(locales) {
    const list = {};
    for (const locale of locales) {
        list[locale] = {};
        try {
            fs.readdirSync(path.join(process.cwd(), `/data/courses/${locale}`)).forEach((dirName) => {
                const entries = fs.readdirSync(path.join(process.cwd(), `/data/courses/${locale}/${dirName}`));
                if (entries.length > 0) {
                    const category = Object.keys(COURSE_CATEGORIES).find(key => COURSE_CATEGORIES[key].includes(dirName)) ?? "FALLBACK";
                    if (!list[locale][category]) list[locale][category] = {};
                    list[locale][category][dirName] = entries.length;
                }
            });
        } catch (err) { console.log(err.message) }
    }
    return list;
}