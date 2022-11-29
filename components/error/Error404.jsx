import Link from "next/link";
import { useLang } from "../../hooks/lang";
import Prompt from "../ui/Prompts";
import styles from "./Error404.module.css";

export default function Error404() {
    const { ERR_404_TITLE, ERR_404_ACTION_HOME, ERR_404_TEXT_MESSAGE } = useLang();

    return (
        <div className={styles.container}>
            <h1>{ERR_404_TITLE}</h1>
            <div className={styles.message}>{ERR_404_TEXT_MESSAGE}</div>
            <Link href="/">
                <Prompt>{ERR_404_ACTION_HOME}</Prompt>
            </Link>
        </div>
    );
}