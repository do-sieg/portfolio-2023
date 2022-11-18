import Image from "next/image";
import Link from "next/link";
import { FaDoorOpen, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { DEV_TECHS } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import Prompt from "../ui/Prompts";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ data }) {
    const { ACTION_VISIT, PROJECT_ACTION_CODE } = useLang();

    if (!data) return null;

    function renderTechIcons() {
        return data.tech.map((techId) => {
            const tech = DEV_TECHS[techId];
            if (!tech) {
                console.error(`Unknown tech '${techId}'`);
                return null;
            }
            return (
                <div key={techId} className={styles.techIconContainer}>
                    <span>{tech.icon}</span>
                    <span className={styles.tooltip}>{tech.name}</span>
                </div>
            );
        });
    }

    function renderActions() {
        return (
            <>
                {data.url && <a href={data.url}><Prompt><FaExternalLinkAlt /> {ACTION_VISIT}</Prompt></a>}
                {data.repository && <a href={data.repository}><Prompt><FaGithub /> {PROJECT_ACTION_CODE}</Prompt></a>}
                {data.link && <Link href={data.link}><Prompt><FaDoorOpen /> {ACTION_VISIT}</Prompt></Link>}
            </>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>{data.name}</div>
            <div className={styles.thumbnail}><Image src={data.imagePath} alt={data.name} fill /></div>
            <div className={styles.techs}>{renderTechIcons()}</div>
            <div className={styles.description}>{data.description}</div>
            <div className={styles.actions}>{renderActions()}</div>
        </div>
    );
}