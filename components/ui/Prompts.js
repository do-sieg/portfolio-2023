import Link from "next/link";
import { useRouter } from "next/router";
import { FaFileDownload, FaGithub } from "react-icons/fa";
import { DEV_GITHUB, DEV_RESUME_PATH } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import styles from "./Prompts.module.css";

export default function Prompt({ children }) {
    return <button className={styles.container}>{children}</button>
}

export function PromptResume() {
    const {locale} = useRouter();
    const { ACTION_RESUME } = useLang();
    return <a href={DEV_RESUME_PATH[locale]} target="_blank" rel="noreferrer"><Prompt><FaFileDownload />{ACTION_RESUME}</Prompt></a>;
}

export function PromptGitHub() {
    const { PROJECT_ACTION_GITHUB } = useLang();
    return <a href={DEV_GITHUB} target="_blank" rel="noreferrer"><Prompt><FaGithub />{PROJECT_ACTION_GITHUB}</Prompt></a>;
}

export function PromptCourses() {
    const { LEARN_ACTION_COURSES } = useLang();
    return <Link href="/learn/courses"><Prompt>{LEARN_ACTION_COURSES}</Prompt></Link>;
}