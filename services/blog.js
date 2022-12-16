import fs from "fs";
import path from "path";
import { loadMarkdown, parseMarkdown } from "./markdown";

const BLOG_PATH = "/data/blog/";
const BLOG_CATEGORIES = [
    "code",
    "javascript",
    "jobs",
];
export const POSTS_PER_PAGE = 5;

function getPosts(locale) {
    try {
        const localePath = path.join(process.cwd(), BLOG_PATH, locale);
        return fs.readdirSync(localePath)
            .map((filename) => {
                const markdown = loadMarkdown(path.join(BLOG_PATH, locale, filename));
                markdown.data.slug = path.basename(filename, ".md");
                return markdown;
            })
            .filter(post => post.data.published === true)
            .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
    } catch (err) {
        throw err;
    }
}

export function getDrafts(locale) {
    try {
        const localePath = path.join(process.cwd(), BLOG_PATH, locale);
        return fs.readdirSync(localePath)
            .map((filename) => {
                const markdown = loadMarkdown(path.join(BLOG_PATH, locale, filename));
                markdown.data.slug = path.basename(filename, ".md");
                return markdown;
            })
            .filter(post => post.data.published !== true)
            .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
    } catch (err) {
        throw err;
    }
}

export function getRecentPosts(locale, limit = 1) {
    try {
        return getPagePosts(locale, 1, limit);
    } catch (err) {
        console.error(err.message);
        return [];
    }
}

export function getPagePosts(locale, page = 1, perPage = 1) {
    try {
        const posts = getPosts(locale);
        const offset = (page - 1) * perPage;
        return { posts: posts.slice(offset, perPage + offset), count: posts.length };
    } catch (err) {
        console.error(err.message);
        return { posts: [], count: 0 };
    }
}

export function getCategoryPagePosts(locale, categoryId, page = 1, perPage = 1) {
    try {
        const posts = getCategoryPosts(locale, categoryId);
        const offset = (page - 1) * perPage;
        return { posts: posts.slice(offset, perPage + offset), count: posts.length };
    } catch (err) {
        console.error(err.message);
        return { posts: [], count: 0 };
    }
}

export function getCategories() {
    return BLOG_CATEGORIES;
}

export function getCategoryPaths(locales) {
    const paths = [];
    for (const locale of locales) {
        if (process.env.NODE_ENV === "development") {
            paths.push(`/${locale}/blog/category/draft`);
        }
        paths.push(...BLOG_CATEGORIES.map(category => `/${locale}/blog/category/${category}`));
    }
    return paths;
}

export function getCategoryPosts(locale, categoryId) {
    try {
        if (process.env.NODE_ENV === "development" && categoryId === "draft") {
            return getDrafts(locale);
        }
        return getPosts(locale).filter(post => post.data.category === categoryId);
    } catch (err) {
        console.error(err.message);
        return [];
    }
}

export function getPostPaths(locales) {
    const paths = [];
    for (const locale of locales) {
        const localePath = path.join(process.cwd(), BLOG_PATH, locale);
        const entries = fs.readdirSync(localePath)
            .map((filename) => {
                const markdown = loadMarkdown(path.join(BLOG_PATH, locale, filename));
                if (markdown.data.published === true || process.env.NODE_ENV === "development") {
                    return `/${locale}/blog/${path.basename(filename, ".md")}`;
                }
                return null;
            })
            .filter(post => post !== null);
        paths.push(...entries);
    }
    return paths;
}

export function getPostData(locale, slug) {
    const data = loadMarkdown(`/${BLOG_PATH}/${locale}/${slug}.md`);
    data.html = parseMarkdown(data.content, { externalLinks: true, imagesNewTab: false });
    return data;
}

export function getSimilarPosts(locale, categoryId, currentPostSlug, limit = 10) {
    try {
        return getCategoryPosts(locale, categoryId)
            .filter(post => post.data.slug !== currentPostSlug)
            .slice(0, limit);
    } catch (err) {
        console.error(err.message);
        return [];
    }
}

/*


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

function convertTags(tags) {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    return tags.split(",").map(tag => tag.trim());
}

*/