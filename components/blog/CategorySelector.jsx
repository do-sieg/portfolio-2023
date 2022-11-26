import { useRouter } from "next/router";
import { useLang } from "../../hooks/lang";
import styles from "./CategorySelector.module.css";

export default function CategorySelector({ categories, currentCategory }) {
    const router = useRouter();
    const { BLOG_ACTION_ALL_CATEGORIES, BLOG_ACTION_DRAFTS, BLOG_TEXT_CATEGORIES } = useLang();

    function handleChangeCategory(e) {
        router.push(`/blog${e.target.value === "all" ? "" : `/category/${e.target.value}`}`);
    }
    return (
        <select className={styles.container} value={currentCategory ?? "all"} onChange={handleChangeCategory}>
            <option value={"all"}>{BLOG_ACTION_ALL_CATEGORIES}</option>
            {process.env.NODE_ENV === "development" && <option value={"draft"}>{BLOG_ACTION_DRAFTS}</option>}
            {categories.map((category) => <option key={category} value={category}>{BLOG_TEXT_CATEGORIES[category]}</option>)}
        </select>
    );
}