import fs from "fs";
import path from "path";
import { loadMarkdown, parseMarkdown } from "./markdown";

const COURSE_CATEGORIES = {
    WEB_LANGUAGES: ["html", "css"],
};

export const COURSE_COVER_IMAGES = {
    html: "/images/learn/html-cover.jpg",
}

const LESSON_TREES = {
    html: {
        FIRST_STEPS: [101, 102, 103],
    },
};

// Get all available subjects organized in categories, with the amount of available lessons
export function getCourseTree(locales) {
    const tree = {};
    for (const locale of locales) {
        tree[locale] = {};
        try {
            fs.readdirSync(path.join(process.cwd(), `/data/courses/${locale}`)).forEach((dirName) => {
                const entries = fs.readdirSync(path.join(process.cwd(), `/data/courses/${locale}/${dirName}`));
                if (entries.length > 0) {
                    const category = Object.keys(COURSE_CATEGORIES).find(key => COURSE_CATEGORIES[key].includes(dirName)) ?? "FALLBACK";
                    if (!tree[locale][category]) tree[locale][category] = {};
                    tree[locale][category][dirName] = entries.length;
                }
            });
        } catch (err) { console.log(err.message) }
    }
    return tree;
}

// Get all available subjects from directories with entries
function getSubjects(locales) {
    const subjects = {};
    for (const locale of locales) {
        subjects[locale] = [];
        try {
            fs.readdirSync(path.join(process.cwd(), `/data/courses/${locale}`)).forEach((dirName) => {
                const entries = fs.readdirSync(path.join(process.cwd(), `/data/courses/${locale}/${dirName}`));
                if (entries.length > 0) {
                    subjects[locale].push(dirName);
                }
            });
        } catch (err) { console.log(err.message) }
    }
    return subjects;
}

// Get all available subject paths
export function getSubjectPaths(locales) {
    const paths = [];
    const langSubjects = getSubjects(locales);
    Object.entries(langSubjects).forEach(([locale, subjects]) => {
        paths.push(...subjects.map(subjectId => `/${locale}/courses/${subjectId}`));
    });
    return paths;
}

function getSubjectLessons(locale, subjectId) {
    const subjectPath = `/data/courses/${locale}/${subjectId}`;
    const subjectLessons = fs.readdirSync(path.join(process.cwd(), subjectPath))
        .map((filename) => {
            const { data } = loadMarkdown(subjectPath + "/" + filename);
            data.slug = path.basename(filename, ".md");
            return data;
        })
        .filter(data => data.published === true);
    return subjectLessons;
}

export function getLessonTree(locale, subjectId) {
    const subjectLessons = getSubjectLessons(locale, subjectId);
    const tree = {};
    Object.entries(LESSON_TREES[subjectId]).forEach(([key, numbers]) => {
        tree[key] = numbers.map(n => subjectLessons.find(data => data.number === n) ?? null).filter(data => data !== null);
    });
    return tree;
}

export function getLessonPaths(locales) {
    const paths = [];
    const subjects = getSubjects(locales);
    for (const locale of locales) {
        for (const subjectId of subjects[locale]) {
            const subjectLessons = getSubjectLessons(locale, subjectId);
            paths.push(...subjectLessons.map(data => `/${locale}/courses/${subjectId}/${data.slug}`));
        }
    }
    return paths;
}

export function getLessonData(locale, subjectId, slug) {
    const data = loadMarkdown(`/data/courses/${locale}/${subjectId}/${slug}.md`);
    data.data.subjectId = subjectId;
    data.data.coverImage = COURSE_COVER_IMAGES[subjectId];
    data.html = parseMarkdown(data.content, { externalLinks: true, imagesNewTab: true });
    return data;
}

