import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Hero from "./Hero";
import { DEV_FULLNAME, DEV_RESUME_PATH, DEV_TECHS } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import Prompt from "../ui/Prompt";
import { FaCogs, FaFileDownload, FaGraduationCap, FaRocket } from "react-icons/fa";
import globals from "../../styles/globals.module.css";
import styles from "./Home.module.css";

const { html, css, js, react, node, next, mysql, php, ruby, gdscript, mongo, wordpress, sass, less, git, seo } = DEV_TECHS;

export default function Home() {
    const { locale } = useRouter();
    const {
        DEV_JOBS,
        ACTION_RESUME,
        HOME_TITLE,
        HOME_TITLE_MAIN_SKILLS,
        HOME_TITLE_OTHER_SKILLS,
        HOME_ACTION_COURSES,
        HOME_ACTION_PROJECTS,
        HOME_ACTION_SKILLS,
        HOME_TEXT_INTRO_DEV,
        HOME_TEXT_INTRO_TEACH,
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
                {HOME_TEXT_INTRO_DEV}
                {HOME_TEXT_INTRO_TEACH}

                <div className={globals.promptBox}>
                    <a href="#skills"><Prompt><FaCogs />{HOME_ACTION_SKILLS}</Prompt></a>
                    <a href={DEV_RESUME_PATH[locale]} target="_blank" rel="noreferrer"><Prompt><FaFileDownload />{ACTION_RESUME}</Prompt></a>
                    <Link href="/projects"><Prompt><FaRocket />{HOME_ACTION_PROJECTS}</Prompt></Link>
                    <Link href="/teach"><Prompt><FaGraduationCap />{HOME_ACTION_COURSES}</Prompt></Link>
                </div>
            </section>

            <section id="skills">
                <h2 className={globals.subheading}>{HOME_TITLE_MAIN_SKILLS}</h2>
                {renderTechs([html, css, js, react, node, next, mysql])}
            </section>

            <section>
                <h2 className={globals.subheading}>{HOME_TITLE_OTHER_SKILLS}</h2>
                {renderTechs([php, ruby, gdscript, mongo, wordpress, sass, less, git, seo])}
            </section>
        </main>
    );
}
