import Post from "../../components/blog/Post";
import { getCategoryPosts, getPostData, getPostPaths, getSimilarPosts } from "../../services/blog";

export function getStaticPaths({ locales }) {
    return { paths: getPostPaths(locales), fallback: false };
}

export function getStaticProps({ params, locale }) {
    const post = getPostData(locale, params.slug);
    const similarPostsData = {
        posts: getSimilarPosts(locale, post.data.category, params.slug, 2),
        count: getCategoryPosts(locale, post.data.category).length,
    };
    return { props: { post, similarPostsData } };
}

export default function Page({ post, similarPostsData }) {
    return <Post post={post} similarPostsData={similarPostsData} />;
}