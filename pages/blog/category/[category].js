import Blog from "../../../components/blog/Blog";
import { getCategories, getCategoryPaths, getCategoryPosts, POSTS_PER_PAGE } from "../../../services/blog";

export function getStaticPaths({ locales }) {
    return { paths: getCategoryPaths(locales), fallback: false };
}

export function getStaticProps({ params, locale }) {
    const { posts, count } = getCategoryPosts(locale, params.category, 1, 5);
    return {
        props: {
            categories: getCategories(),
            posts,
            count,
            perPage: POSTS_PER_PAGE,
            currentCategory: params.category,
        }
    };
}

export default function Page({ categories, posts, count, perPage, currentCategory }) {
    return <Blog categories={categories} posts={posts} count={count} perPage={perPage} currentCategory={currentCategory} />;
}