import Link from "next/link";
import { useRouter } from "next/router";
import { FaEnvelope, FaFileDownload, FaGithub, FaGraduationCap } from "react-icons/fa";
import { DEV_GITHUB, DEV_RESUME_PATH } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import styles from "./Prompts.module.css";

export default function Prompt({ children }) {
    return <button className={styles.container}>{children}</button>
}

export function PromptContact() {
    const { ACTION_CONTACT } = useLang();
    return <Link href="/contact"><Prompt><FaEnvelope />{ACTION_CONTACT}</Prompt></Link>;
}

export function PromptResume() {
    const {locale} = useRouter();
    const { ACTION_RESUME } = useLang();
    return <a href={DEV_RESUME_PATH[locale]} target="_blank" rel="noreferrer"><Prompt><FaFileDownload />{ACTION_RESUME}</Prompt></a>;
}

export function PromptGitHub() {
    const { PROJECTS_ACTION_GITHUB } = useLang();
    return <a href={DEV_GITHUB} target="_blank" rel="noreferrer"><Prompt><FaGithub />{PROJECTS_ACTION_GITHUB}</Prompt></a>;
}

export function PromptCourses() {
    const { LEARN_ACTION_COURSES } = useLang();
    return <Link href="/courses"><Prompt><FaGraduationCap />{LEARN_ACTION_COURSES}</Prompt></Link>;
}