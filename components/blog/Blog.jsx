import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
import Prompt from "../ui/Prompts";
import Credits from "../ui/Credits";
import PageCover from "../ui/PageCover";
import CategorySelector from "./CategorySelector";
import PostCard from "./PostCard";
import coverImg from "../../public/images/page-covers/blog-cover.jpg";
import globals from "../../styles/globals.module.css";
import styles from "./Blog.module.css";
import axios from "axios";

export default function Blog({ categories = [], posts = [], count = 0, perPage = 1, currentCategory = null }) {
    const { locale } = useRouter();
    const { resetRef } = useResetAnimations([locale, currentCategory]);
    const {
        ACTION_LOAD_MORE,
        TEXT_PHOTO_CREDITS,
        BLOG_TITLE,
        BLOG_TITLE_RECENT,
        BLOG_TEXT_INTRO,
        BLOG_TEXT_CATEGORIES,
    } = useLang();
    const [displayedPosts, setDisplayedPosts] = useState(posts);
    const [totalCount, setTotalCount] = useState(count);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        if (totalCount !== count) {
            reloadPosts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalCount]);

    async function loadNextPosts(nextPageNumber) {
        try {
            const response = await axios.post(`/api/blog/${nextPageNumber}`, { locale, currentCategory, perPage });
            if (response.data.posts.length > 0) {
                setPageNumber(nextPageNumber);
                setDisplayedPosts(prevState => [...prevState, ...response.data.posts]);
            }
            setTotalCount(response.data.count);
        } catch (err) {
            console.error("Couldn't load next posts: ", err.message);
        }
    }

    async function reloadPosts(max = pageNumber) {
        try {
            const newPosts = [];
            for (let i = 1; i <= max; i++) {
                const response = await axios.post(`/api/blog/${i}`, { locale, currentCategory, perPage });
                if (response.data.posts.length > 0) {
                    newPosts.push(...response.data.posts);
                } else {
                    break;
                }
            }
            setDisplayedPosts(newPosts);
        } catch (err) {
            console.error("Couldn't reload posts: ", err.message);
        }
    }

    async function handleLoadMore(e) {
        e.preventDefault();
        loadNextPosts(pageNumber + 1);
    }

    return (
        <main className={globals.pageContainer}>
            <HeadMeta name="title" content={currentCategory ? BLOG_TEXT_CATEGORIES[currentCategory] : BLOG_TITLE} />

            <PageCover src={coverImg} alt={BLOG_TITLE} />

            <h1 ref={resetRef} className={globals.heading}>{currentCategory ? BLOG_TEXT_CATEGORIES[currentCategory] : BLOG_TITLE}</h1>

            {currentCategory === null &&
                <section ref={resetRef}>
                    {BLOG_TEXT_INTRO}
                </section>
            }

            <section ref={resetRef}>
                {currentCategory === null && <h2 className={globals.subheading}>{BLOG_TITLE_RECENT}</h2>}

                <div className={styles.categorySelectorWrapper}>
                    <CategorySelector categories={categories} currentCategory={currentCategory} />
                </div>

                <div className={styles.postsGrid}>
                    {displayedPosts.map((post, index) => {
                        return <PostCard key={index} post={post} />;
                    })}
                </div>

                {displayedPosts.length < totalCount &&
                    <div className={styles.actions}>
                        <Prompt onClick={handleLoadMore}>{ACTION_LOAD_MORE}</Prompt>
                    </div>
                }
            </section>

            <div style={{ marginTop: "2rem" }}>
                <Credits text={TEXT_PHOTO_CREDITS} name="Tranmautritam" link="https://www.pexels.com@tranmautritam/" />
            </div>
        </main>
    );
}