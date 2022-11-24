import Head from "next/head";
import { DEV_FULLNAME } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import CategorySelector from "./CategorySelector";
import PostCard from "./PostCard";
import globals from "../../styles/globals.module.css";
import styles from "./Blog.module.css";

export default function Blog({ categories = [], posts = [], currentCategory = null }) {
    const {
        BLOG_TITLE,
        BLOG_TITLE_RECENT,
        BLOG_TEXT_INTRO,
        BLOG_TEXT_CATEGORIES,
    } = useLang();

    return (
        <main className={globals.pageContainer}>
            <Head>
                <title>{`${DEV_FULLNAME} - ${currentCategory ? BLOG_TEXT_CATEGORIES[currentCategory] : BLOG_TITLE}`}</title>
            </Head>

            <h1 className={globals.heading}>{currentCategory ? BLOG_TEXT_CATEGORIES[currentCategory] : BLOG_TITLE}</h1>

            {currentCategory === null &&
                <section>
                    {BLOG_TEXT_INTRO}
                </section>
            }

            <section>
                {currentCategory === null && <h2 className={globals.subheading}>{BLOG_TITLE_RECENT}</h2>}

                <div className={styles.categorySelectorWrapper}>
                    <CategorySelector categories={categories} currentCategory={currentCategory} />
                </div>

                <div className={styles.postsGrid}>
                    {posts.map((post, index) => {
                        return <PostCard key={index} post={post} />;
                    })}
                </div>
            </section>
        </main>
    );
}