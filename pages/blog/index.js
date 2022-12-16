import Blog from "../../components/blog/Blog";
import { getCategories, getRecentPosts, POSTS_PER_PAGE } from "../../services/blog";

export function getStaticProps({ locale }) {
    const { posts, count } = getRecentPosts(locale, POSTS_PER_PAGE);
    return {
        props: {
            categories: getCategories(),
            posts,
            count,
            perPage: POSTS_PER_PAGE,
        }
    };
}

export default function Page({ categories, posts, count, perPage }) {
    return <Blog categories={categories} posts={posts} count={count} perPage={perPage} />;
}