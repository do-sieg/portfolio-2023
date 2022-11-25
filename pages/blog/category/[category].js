import Blog from "../../../components/blog/Blog";
import { getCategories, getCategoryPaths, getCategoryPosts } from "../../../services/blog";

export function getStaticPaths({ locales }) {
    return { paths: getCategoryPaths(locales), fallback: false };
}

export function getStaticProps({ params, locale }) {
    return {
        props: {
            categories: getCategories(),
            posts: getCategoryPosts(locale, params.category),
            currentCategory: params.category,
        }
    };
}

export default function Page({ categories, posts, currentCategory }) {
    return <Blog categories={categories} posts={posts} currentCategory={currentCategory} />;
}