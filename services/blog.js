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

function getPosts({ locale, categoryId, page = 1, perPage = POSTS_PER_PAGE, searchTerm = "", exclude = [] }) {
    try {
        const localePath = path.join(process.cwd(), BLOG_PATH, locale);
        let posts = fs.readdirSync(localePath)
            .map((filename) => {
                const markdown = loadMarkdown(path.join(BLOG_PATH, locale, filename));
                markdown.data.slug = path.basename(filename, ".md");
                return markdown;
            })
            .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

        if (searchTerm) {
            const titlePosts = posts.filter(post => post.data.title.toLowerCase().includes(searchTerm.toLowerCase()));
            const descPosts = posts
                .filter(post => !titlePosts.includes(post))
                .filter(post => post.data.description.toLowerCase().includes(searchTerm.toLowerCase()));
            const textPosts = posts
                .filter(post => ![...titlePosts, ...descPosts].includes(post))
                .filter(post => post.content.toLowerCase().includes(searchTerm.toLowerCase()));
            posts = [...titlePosts, ...descPosts, ...textPosts];
        }

        if (exclude.length > 0) {
            posts = posts.filter(post => !exclude.includes(post.data.slug));
        }

        if (process.env.NODE_ENV === "development" && categoryId === "draft") {
            posts = posts.filter(post => post.data.published !== true);
        } else {
            posts = posts.filter(post => post.data.published === true);
            if (categoryId) {
                posts = posts.filter(post => post.data.category === categoryId);
            }
        }

        const count = posts.length;

        if (page && perPage) {
            const offset = (page - 1) * perPage;
            posts = posts.slice(offset, perPage + offset);
        }

        return { posts, count };
    } catch (err) {
        console.error(err.message);
        return [];
    }
}

export function getAllPosts(locale, page = 1, perPage = POSTS_PER_PAGE) {
    return getPosts({ locale, page, perPage });
}

export function getCategoryPosts(locale, categoryId, page = 1, perPage = POSTS_PER_PAGE) {
    return getPosts({ locale, categoryId, page, perPage });
}

export function getRecentPosts(locale, perPage = POSTS_PER_PAGE) {
    return getPosts({ locale, perPage });
}

export function getSimilarPosts(locale, categoryId, currentPostSlug, limit = 10) {
    return getPosts({ locale, categoryId, perPage: limit, exclude: [currentPostSlug] });
}

export function searchPosts(locale, categoryId, searchTerm, page = 1, perPage = POSTS_PER_PAGE) {
    return getPosts({ locale, categoryId, searchTerm, page, perPage });
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
            .filter(post => tag ? post.data.tags && post.data.tags.includes(tag) : true)

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