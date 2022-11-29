import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
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
            <HeadMeta name="title" content={currentCategory ? BLOG_TEXT_CATEGORIES[currentCategory] : BLOG_TITLE} />

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