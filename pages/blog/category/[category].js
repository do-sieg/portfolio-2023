import Blog from "../../../components/blog/Blog";
import { BLOG_CATEGORIES, getCategoryPosts } from "../../../services/blog";

export function getStaticPaths() {
    return { paths: BLOG_CATEGORIES.map(category => `/blog/category/${category}`), fallback: false };
}

export function getStaticProps({ params, locale }) {
    return {
        props: {
            categories: BLOG_CATEGORIES,
            posts: getCategoryPosts(locale, params.category),
            currentCategory: params.category,
        }
    };
}

export default function Page({ categories, posts, currentCategory }) {
    return <Blog categories={categories} posts={posts} currentCategory={currentCategory} />;
}