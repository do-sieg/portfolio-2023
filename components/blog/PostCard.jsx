import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getReadingTime } from "../../utils/text";
import { useLang } from "../../hooks/lang";
import PostInfo from "./PostInfo";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
    const { locale } = useRouter();
    const { TEXT_DRAFT, BLOG_TEXT_CATEGORIES } = useLang();

    return (
        <Link className={styles.container} href={`/blog/${post.data.slug}`}>
            {post.data.published !== true && <div className={styles.draftBadge}>{TEXT_DRAFT}</div>}
            <div className={styles.coverContainer}>
                {post.data.coverImage && <Image src={post.data.coverImage.path} alt={post.data.title} fill />}
            </div>

            <div className={styles.dataPanel}>
                <Link className={styles.category} href={`/blog/category/${post.data.category}`}>{BLOG_TEXT_CATEGORIES[post.data.category]}</Link>
                <div className={styles.title}>{post.data.title}</div>
                <div className={styles.description}>{post.data.description}</div>
                <PostInfo date={post.data.date} readingTime={getReadingTime(locale, post.content)} />
            </div>
        </Link>
    );
}