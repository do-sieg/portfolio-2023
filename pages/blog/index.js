import Blog from "../../components/blog/Blog";
import { getCategories, getRecentPosts } from "../../services/blog";

export function getStaticProps({ locale }) {
    return {
        props: {
            categories: getCategories(),
            posts: getRecentPosts(locale, 5),
        }
    };
}

export default function Page({ categories, posts }) {
    return <Blog categories={categories} posts={posts} />;
}