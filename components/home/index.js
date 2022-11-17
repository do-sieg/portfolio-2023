import Link from "next/link";
import { useRouter } from "next/router";
import Hero from "./Hero";
import { DEV_FULLNAME, DEV_RESUME_PATH, DEV_TECHS } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import globals from "../../styles/globals.module.css";
import Prompt from "../ui/Prompt";
import styles from "./Home.module.css";
import Head from "next/head";

const { html, css, js, react, node, next, mysql, php, ruby, gdscript, mongo, wordpress, sass, less, git, seo } = DEV_TECHS;

export default function Home() {
    const { locale } = useRouter();
    const {
        DEV_JOBS,
        HOME_TITLE,
        HOME_MAIN_SKILLS,
        HOME_OTHER_SKILLS,
        HOME_INTRODUCTION_DEV,
        HOME_INTRODUCTION_TEACH,
        HOME_VIEW_TEACH,
        HOME_VIEW_PROJECTS,
        HOME_DOWNLOAD_RESUME,
        HOME_CHECK_SKILLS
    } = useLang();

    function renderTechs(list) {
        return (
            <div className={styles.skillsContainer}>
                {list.map(({ name, icon }, index) => {
                    return (
                        <div key={index} className={styles.tech}>
                            {icon}
                            <span>{name}</span>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <main className={globals.pageContainer}>
            <Head>
                <title>{`${DEV_FULLNAME} - ${DEV_JOBS}`}</title>
            </Head>

            <Hero style={{ marginBottom: "5rem" }} />

            <h1 className={globals.heading}>{HOME_TITLE}</h1>

            <section>
                {HOME_INTRODUCTION_DEV}
                {HOME_INTRODUCTION_TEACH}

                <div className={styles.promptBox}>
                    <Link href={"/projects"}><Prompt>{HOME_VIEW_PROJECTS}</Prompt></Link>
                    <a href="#skills"><Prompt>{HOME_CHECK_SKILLS}</Prompt></a>
                    <a href={DEV_RESUME_PATH[locale]} target="_blank" rel="noreferrer"><Prompt>{HOME_DOWNLOAD_RESUME}</Prompt></a>
                    <Link href="/teach"><Prompt>{HOME_VIEW_TEACH}</Prompt></Link>
                </div>
            </section>

            <section id="skills">
                <h2 className={globals.subheading}>{HOME_MAIN_SKILLS}</h2>
                {renderTechs([html, css, js, react, node, next, mysql])}
            </section>

            <section>
                <h2 className={globals.subheading}>{HOME_OTHER_SKILLS}</h2>
                {renderTechs([php, ruby, gdscript, mongo, wordpress, sass, less, git, seo])}
            </section>
        </main>
    );
}
