import Blog from "../../components/blog/Blog";
import { BLOG_CATEGORIES, getRecentPosts } from "../../services/blog";

export function getStaticProps({ locale }) {
    return {
        props: {
            categories: BLOG_CATEGORIES,
            posts: getRecentPosts(locale, 5),
        }
    };
}

export default function Page({ categories, posts }) {
    return <Blog categories={categories} posts={posts} />;
}