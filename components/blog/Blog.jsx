import { useRouter } from "next/router";
import { useLang } from "../../hooks/lang";
import { useResetAnimations } from "../../hooks/transition";
import HeadMeta from "../meta/HeadMeta";
import Credits from "../ui/Credits";
import PageCover from "../ui/PageCover";
import CategorySelector from "./CategorySelector";
import PostCard from "./PostCard";
import coverImg from "../../public/images/page-covers/blog-cover.jpg";
import globals from "../../styles/globals.module.css";
import styles from "./Blog.module.css";

export default function Blog({ categories = [], posts = [], currentCategory = null }) {
    const { locale } = useRouter();
    const { resetRef } = useResetAnimations([locale, currentCategory]);
    const {
        TEXT_PHOTO_CREDITS,
        BLOG_TITLE,
        BLOG_TITLE_RECENT,
        BLOG_TEXT_INTRO,
        BLOG_TEXT_CATEGORIES,
    } = useLang();

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
                    {posts.map((post, index) => {
                        return <PostCard key={index} post={post} />;
                    })}
                </div>
            </section>
            
            <div style={{ marginTop: "2rem" }}>
                <Credits text={TEXT_PHOTO_CREDITS} name="Tranmautritam" link="https://www.pexels.com@tranmautritam/" />
            </div>
        </main>
    );
}