/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import { useScrollRead } from "../../hooks/scroll";
import { getReadingTime } from "../../utils/text";
import axios from "axios";
import HeadMeta from "../meta/HeadMeta";
import HeadLocaleAlt from "../meta/HeadLocaleAlt";
import ReadingProgress from "../ui/ReadingProgress";
import Author from "./Author";
import BackLink from "../ui/BackLink";
import Credits from "../ui/Credits";
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
    const { TEXT_PHOTO_CREDITS, BLOG_TEXT_CATEGORIES } = useLang();
    const [statePost, setStatePost] = useState(post);

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            reloadPost();
        }
    });

    async function reloadPost() {
        try {
            const response = await axios.get(`/api/blog/post/${locale}/${post.data.slug}`);
            setStatePost(response.data.post);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <ReadingProgress progress={scrolled} />

            <main ref={resetRef} className={globals.pageContainer}>
                <HeadMeta name="type" content="article" />
                <HeadMeta name="title" content={statePost.data.title} />
                <HeadMeta name="description" content={statePost.data.description} />
                {statePost.data.coverImage?.path &&
                    <HeadMeta name="image" content={process.env.NEXT_PUBLIC_HOST + statePost.data.coverImage?.path} />
                }
                <HeadLocaleAlt lang={locale} href={`${process.env.NEXT_PUBLIC_HOST}/${locale}/blog/${statePost.data.slug}`} />
                {statePost.data.translations && Object.keys(statePost.data.translations).map((locale) => {
                    return <HeadLocaleAlt key={locale} lang={locale} href={`${process.env.NEXT_PUBLIC_HOST}/${locale}/blog/${statePost.data.translations[locale]}`} />
                })}

                <BackLink href={`/blog/category/${statePost.data.category}`}>{BLOG_TEXT_CATEGORIES[statePost.data.category]}</BackLink>

                <h1 className={[globals.heading, styles.heading].join(" ")}>{statePost.data.title}</h1>

                <div className={styles.postDescription}>{statePost.data.description}</div>

                <div className={styles.infoContainer}>
                    <PostInfo date={statePost.data.date} readingTime={getReadingTime(locale, statePost.content)} />
                </div>

                <div className={styles.coverImageContainer}>
                    <img src={statePost.data.coverImage?.path} alt={statePost.data.title} />
                </div>

                <div className={markdown.container} dangerouslySetInnerHTML={{ __html: statePost.html }} />

                {statePost.data.coverImage?.authorName &&
                    <Credits
                        text={TEXT_PHOTO_CREDITS}
                        name={statePost.data.coverImage.authorName?.split(",").map(name => name.trim())}
                        link={statePost.data.coverImage.authorUrl?.split(",").map(link => link.trim()) ?? null}
                    />
                }

                <Author />

                {similarPostsData.posts.length > 0 && (
                    <div className={styles.postFooter}>
                        <SimilarPostsCard data={similarPostsData} />
                        {similarPostsData.posts.slice(0, 3).map((statePost, index) => {
                            return <PostCard key={index} post={statePost} customClasses={{ coverContainer: styles.postCardCoverContainer }} />
                        })}
                    </div>
                )}
            </main>
        </>
    );
}