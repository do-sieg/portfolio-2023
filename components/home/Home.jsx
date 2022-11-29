import Link from "next/link";
import { DEV_FULLNAME, DEV_TECHS } from "../../data/dev";
import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
import Hero from "./Hero";
import Prompt, { PromptResume } from "../ui/Prompts";
import { FaCogs, FaGraduationCap, FaRocket } from "react-icons/fa";
import globals from "../../styles/globals.module.css";
import styles from "./Home.module.css";

const { html, css, js, react, node, next, mysql, php, ruby, gdscript, mongo, wordpress, sass, less, git, seo } = DEV_TECHS;

export default function Home() {
    const {
        DEV_JOBS,
        HOME_TITLE,
        HOME_TITLE_MAIN_SKILLS,
        HOME_TITLE_OTHER_SKILLS,
        HOME_ACTION_LEARN,
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
            <HeadMeta name="title" content={`${DEV_FULLNAME} - ${DEV_JOBS}`} />

            <Hero style={{ marginBottom: "5rem" }} />

            <h1 className={globals.heading}>{HOME_TITLE}</h1>

            <section>
                {HOME_TEXT_INTRO_DEV}
                {HOME_TEXT_INTRO_TEACH}

                <div className={globals.promptGrid}>
                    <Link href="#skills"><Prompt><FaCogs />{HOME_ACTION_SKILLS}</Prompt></Link>
                    <PromptResume />
                    <Link href="/projects"><Prompt><FaRocket />{HOME_ACTION_PROJECTS}</Prompt></Link>
                    <Link href="/learn"><Prompt><FaGraduationCap />{HOME_ACTION_LEARN}</Prompt></Link>
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
