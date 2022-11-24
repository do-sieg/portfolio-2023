import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DEV_FULLNAME } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import ProjectCard from "./ProjectCard";
import { PromptGitHub, PromptResume } from "../ui/Prompts";
import globals from "../../styles/globals.module.css";
import styles from "./Projects.module.css";

export default function Projects() {
    const { locale } = useRouter();
    const {
        PROJECTS_TITLE,
        PROJECTS_TITLE_CLIENTS,
        PROJECTS_TITLE_OWN,
        PROJECTS_TITLE_DEMO,
        PROJECTS_TITLE_OLD,
        PROJECTS_TEXT_INTRO,
    } = useLang();

    const [projects, setProjects] = useState({});
    useEffect(() => {
        const localeProjects = require(`../../data/projects_${locale}.json`);
        setProjects(localeProjects);
    }, [locale]);

    return (
        <main className={globals.pageContainer}>
            <Head>
                <title>{`${DEV_FULLNAME} - ${PROJECTS_TITLE}`}</title>
            </Head>

            <h1 className={globals.heading}>{PROJECTS_TITLE}</h1>

            <section>
                {PROJECTS_TEXT_INTRO}

                <div className={globals.promptBox}>
                    <PromptGitHub />
                    <PromptResume />
                </div>
            </section>

            <section>
                <h2 className={globals.subheading}>{PROJECTS_TITLE_CLIENTS}</h2>
                <div className={styles.cardsContainer}>
                    <ProjectCard data={projects.armenianz} />
                    <ProjectCard data={projects.kentia} />
                    <ProjectCard data={projects.saleth} />
                    <ProjectCard data={projects.biochem} />
                </div>
            </section>

            <section>
                <h2 className={globals.subheading}>{PROJECTS_TITLE_OWN}</h2>
                <div className={styles.cardsContainer}>
                    <ProjectCard data={projects["do-blog"]} />
                    <ProjectCard data={projects.arpege} />
                    <ProjectCard data={projects.scriptmanager} />
                    <ProjectCard data={projects.xpal} />
                </div>
            </section>

            <section>
                <h2 className={globals.subheading}>{PROJECTS_TITLE_DEMO}</h2>
                <div className={styles.cardsContainer}>
                    <ProjectCard data={projects.oc7} />
                    <ProjectCard data={projects.oc6} />
                    <ProjectCard data={projects.oc4} />
                    <ProjectCard data={projects.oc3} />
                    <ProjectCard data={projects.oc2} />
                </div>
            </section>

            <section>
                <h2 className={globals.subheading}>{PROJECTS_TITLE_OLD}</h2>
                <div className={styles.cardsContainer}>
                    <ProjectCard data={projects.coursjs} />
                </div>
            </section>

        </main>
    );
}