import fs from "fs";
import path from "path";
import { loadMarkdown } from "./markdown";

const BLOG_PATH = "/data/blog/";
export const BLOG_CATEGORIES = [
    "javascript",
    "jobs",
];

function getPosts(locale) {
    try {
        const localePath = path.join(process.cwd(), BLOG_PATH, locale);
        return fs.readdirSync(localePath)
            .map((filename) => {
                const markdown = loadMarkdown(path.join(BLOG_PATH, locale, filename));
                markdown.data.slug = path.basename(filename, ".md");
                return markdown;
            })
            .filter(post => process.env.NODE_ENV === "development" || post.data.published)
            .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
    } catch (err) {
        throw err;
    }
}

export function getRecentPosts(locale, limit = 1) {
    try {
        return getPosts(locale).slice(0, limit);
    } catch (err) {
        console.error(err.message);
        return [];
    }
}

export function getCategoryPosts(locale, categoryId) {
    try {
        return getPosts(locale).filter(post => post.data.category === categoryId);
    } catch (err) {
        console.error(err.message);
        return [];
    }
}



/*

export async function getSinglePost({ pathname, locale, slug }) {
    const markdown = await loadMarkdown(path.join(pathname, `${slug}.md`), true);
    markdown.data.readingTime = getReadingTime(locale, markdown.content);
    markdown.data.tags = convertTags(markdown.data.tags);
    return addDefaultAuthor(markdown);
}

export async function getPosts({
    pathname,
    locale,
    limit = 0,
    page = 0,
    postsPerPage = 0,
    authorId = null,
    category = null,
    tag = null,
    exclude = [],
}) {
    try {
        // Get all entries from the folder
        let entries = fs.readdirSync(path.join(process.cwd(), pathname));

        // Get metadata from files
        entries = await Promise.all(entries
            .map(async (filename) => {
                const markdown = await loadMarkdown(path.join(pathname, filename));
                markdown.data.readingTime = getReadingTime(locale, markdown.content);
                markdown.data.tags = convertTags(markdown.data.tags);
                return {
                    slug: filename.substring(0, filename.indexOf(".md")),
                    data: markdown.data,
                };
            }));

        // Common filters
        entries = entries
            .filter(post => process.env.NODE_ENV === "development" || post.data.published)
            .filter(post => category ? post.data.category === category : true)
            .filter(post => tag ? post.data.tags && post.data.tags.includes(tag) : true)
            .filter(post => !exclude.includes(post.slug))
            .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
            .map(post => addDefaultAuthor(post));

        // Author filter
        let authorName = "";
        if (authorId) {
            entries = entries.filter(post => post.data.author.id === authorId);
            authorName = entries[0].data.author.name;
        }

        // Pagination data
        const totalPosts = entries.length;
        let maxPage = 1;
        if (limit) {
            page = 1;
            postsPerPage = limit;
        }
        if (page && postsPerPage) {
            entries = entries.slice(0, postsPerPage);
            maxPage = Math.ceil(entries.length / postsPerPage);
        }

        return { posts: entries, totalPosts, maxPage, postsPerPage, authorName };
    } catch (err) {
        console.error(`Error on loading blog posts for pathname '${pathname}'.`, err.message);
        return { posts: [], totalPosts: 0, maxPage: 1, postsPerPage: 0, authorName: "" };
    }
}

function getReadingTime(locale, text) {
    if (!locale) {
        console.error("getReadingTime: locale wasn't provided");
        return undefined;
    }

    const averageWordsPerMinute = {
        en: 228,
        fr: 195,
    }[locale ?? "en"];
    const wordCount = text.replace(/[^\w ]/g, "").split(/\s+/).length;
    return Math.ceil(wordCount / averageWordsPerMinute);
}

function convertTags(tags) {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    return tags.split(",").map(tag => tag.trim());
}

function addDefaultAuthor(post) {
    if (post.data && !post.data.author) {
        post.data.author = blogConfig.defaultAuthor ?? { id: "", name: "", picture: "" };
    }
    return post;
}

*/