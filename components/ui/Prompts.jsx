import Link from "next/link";
import { useRouter } from "next/router";
import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { DEV_GITHUB, DEV_LINDEKIN, DEV_RESUME_PATH } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import styles from "./Prompts.module.css";

export default function Prompt({ children, onClick = () => {} }) {
    return <button onClick={onClick} className={styles.container}>{children}</button>
}

export function PromptLink({ children, href }) {
    return <Link href={href} className={styles.container}>{children}</Link>
}

export function PromptContact() {
    const { ACTION_CONTACT } = useLang();
    return <PromptLink href="/contact"><FaEnvelope />{ACTION_CONTACT}</PromptLink>;
}

export function PromptResume() {
    const {locale} = useRouter();
    const { ACTION_RESUME } = useLang();
    return <a className={styles.container} href={DEV_RESUME_PATH[locale]} target="_blank" rel="noreferrer"><FaFileDownload />{ACTION_RESUME}</a>;
}

export function PromptLinkedIn() {
    const { ACTION_LINKEDIN } = useLang();
    return <a className={styles.container} href={DEV_LINDEKIN} target="_blank" rel="noreferrer"><FaLinkedin />{ACTION_LINKEDIN}</a>;
}

export function PromptGitHub() {
    const { PROJECTS_ACTION_GITHUB } = useLang();
    return <a className={styles.container} href={DEV_GITHUB} target="_blank" rel="noreferrer"><FaGithub />{PROJECTS_ACTION_GITHUB}</a>;
}
