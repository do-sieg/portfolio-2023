/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import { useScrollRead } from "../../hooks/scroll";
import { getReadingTime } from "../../utils/text";
import HeadMeta from "../meta/HeadMeta";
import HeadLocaleAlt from "../meta/HeadLocaleAlt";
import ReadingProgress from "../ui/ReadingProgress";
import Author from "./Author";
import BackLink from "../ui/BackLink";
import PostCard from "./PostCard";
import PostInfo from "./PostInfo";
import SimilarPostsCard from "./SimilarPostsCard";
import globals from "../../styles/globals.module.css";
import markdown from "../../styles/markdown.module.css";
import styles from "./Post.module.css";

export default function Post({ post, similarPostsData }) {
    const { locale, asPath } = useRouter();
    const { resetRef } = useResetAnimations([locale, asPath]);
    const scrolled = useScrollRead();
    const { BLOG_TEXT_CATEGORIES } = useLang();

    return (
        <>
            <ReadingProgress progress={scrolled} />

            <main ref={resetRef} className={globals.pageContainer}>
                <HeadMeta name="type" content="article" />
                <HeadMeta name="title" content={post.data.title} />
                <HeadMeta name="description" content={post.data.description} />
                {post.data.coverImage?.path &&
                    <HeadMeta name="image" content={process.env.NEXT_PUBLIC_HOST + post.data.coverImage?.path} />
                }
                <HeadLocaleAlt lang={locale} href={`${process.env.NEXT_PUBLIC_HOST}/${locale}/blog/${post.data.slug}`} />
                {post.data.translations && Object.keys(post.data.translations).map((locale) => {
                    return <HeadLocaleAlt key={locale} lang={locale} href={`${process.env.NEXT_PUBLIC_HOST}/${locale}/blog/${post.data.translations[locale]}`} />
                })}

                <BackLink href={`/blog/category/${post.data.category}`}>{BLOG_TEXT_CATEGORIES[post.data.category]}</BackLink>

                <h1 className={[globals.heading, styles.heading].join(" ")}>{post.data.title}</h1>

                <div className={styles.postDescription}>{post.data.description}</div>

                <div className={styles.infoContainer}>
                    <PostInfo date={post.data.date} readingTime={getReadingTime(locale, post.content)} />
                </div>

                <div className={styles.coverImageContainer}>
                    <img src={post.data.coverImage?.path} alt={post.data.title} />
                </div>

                <div className={markdown.container} dangerouslySetInnerHTML={{ __html: post.html }} />

                <hr />

                <Author />

                {similarPostsData.posts.length > 0 && (
                    <div className={styles.postFooter}>
                        <SimilarPostsCard data={similarPostsData} />
                        {similarPostsData.posts.slice(0, 3).map((post, index) => {
                            return <PostCard key={index} post={post} customClasses={{ coverContainer: styles.postCardCoverContainer }} />
                        })}
                    </div>
                )}
            </main>
        </>
    );
}