/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { DEV_FULLNAME } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import { getReadingTime } from "../../utils/text";
import BackLink from "../ui/BackLink";
import PostInfo from "./PostInfo";
import SimilarPostsCard from "./SimilarPostsCard";
import globals from "../../styles/globals.module.css";
import markdown from "../../styles/markdown.module.css";
import styles from "./Post.module.css";
import PostCard from "./PostCard";

export default function Post({ post, similarPostsData }) {
    const { locale } = useRouter();
    const { BLOG_TEXT_CATEGORIES } = useLang();

    return (
        <main className={globals.pageContainer}>
            <Head>
                <title>{`${DEV_FULLNAME} - ${post.data.title}`}</title>
            </Head>

            <ul>
                <li>Passer drafts dans leur propre catégorie accessible à partir de sélecteur dev + les virer des autres méthodes</li>
                <li>Bloc signature auteur</li>
                <li>Liens de traduction, etc...</li>
            </ul>

            <BackLink href={`/blog/category/${post.data.category}`}>{BLOG_TEXT_CATEGORIES[post.data.category]}</BackLink>

            <h1 className={[globals.heading, styles.heading].join(" ")}>{post.data.title}</h1>

            <div className={styles.postDescription}>{post.data.description}</div>

            <div className={styles.infoContainer}>
                <PostInfo date={post.data.date} readingTime={getReadingTime(locale, post.content)} />
            </div>

            <div className={styles.coverImageContainer}>
                <img src={post.data.coverImage.path} alt={post.data.title} />
            </div>

            <div className={markdown.container} dangerouslySetInnerHTML={{ __html: post.html }} />

            <div className={styles.postFooter}>
                <SimilarPostsCard data={similarPostsData} />
                {similarPostsData.posts.slice(0, 3).map((post, index) => {
                    return <PostCard key={index} post={post} />
                })}
            </div>
        </main>
    );
}