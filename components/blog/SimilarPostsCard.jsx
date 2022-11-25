import Link from "next/link";
import { useRouter } from "next/router";
import { useLang } from "../../hooks/lang";
import { getReadingTime } from "../../utils/text";
import styles from "./SimilarPostsCard.module.css";

export default function SimilarPostsCard({ data }) {
    const { locale } = useRouter();
    const {
        TEXT_READING_TIME,
        BLOG_DATE_FORMAT,
        BLOG_TEXT_READ_MORE_CATEGORY,
        BLOG_TEXT_SEE_ALL_POSTS,
    } = useLang();

    return (
        <div className={styles.container}>
            <div className={styles.categoryLink}>
                {BLOG_TEXT_READ_MORE_CATEGORY(data.posts[0].data.category)}
            </div>

            <ul>
                {data.posts.map((post, index) => {
                    return (
                        <li key={index}>
                            <Link href={`/blog/${post.data.slug}`}>
                                <span className={styles.postTitle}>{post.data.title}</span>
                                <span className={styles.postInfo}>{BLOG_DATE_FORMAT(post.data.date)} | {TEXT_READING_TIME(getReadingTime(locale, post.content))}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Link className={styles.seeAllPostsLink} href={`/blog/category/${data.posts[0].data.category}`}>{BLOG_TEXT_SEE_ALL_POSTS(data.count)}</Link>
        </div >
    );
}