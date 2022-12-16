import Link from "next/link";
import { useRouter } from "next/router";
import { DEV_FULLNAME, DEV_TECHS } from "../../data/dev";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
import Hero from "./Hero";
import Prompt, { PromptContact, PromptResume } from "../ui/Prompts";
import SkillsList from "../ui/SkillsList";
import { FaCogs, FaGraduationCap, FaRocket } from "react-icons/fa";
import globals from "../../styles/globals.module.css";
import styles from "./Home.module.css";

const { html, css, js, react, node, next, mysql, maria, php, ruby, svelte, gdscript, mongo, wordpress, sass, less, git, seo } = DEV_TECHS;

export default function Home() {
    const { locale } = useRouter();
    const { resetRef } = useResetAnimations([locale]);
    const {
        TEXT_DEV_JOBS,
        HOME_TITLE,
        HOME_TITLE_DEV,
        HOME_TITLE_TEACH,
        HOME_TITLE_SKILLS_MAIN,
        HOME_TITLE_SKILLS_OTHER,
        HOME_ACTION_LEARN,
        HOME_ACTION_PROJECTS,
        HOME_ACTION_SKILLS,
        HOME_TEXT_INTRO_DEV,
        HOME_TEXT_INTRO_HIRE,
        HOME_TEXT_INTRO_TEACH,
        HOME_TEXT_INTRO_SKILLS_MAIN,
        HOME_TEXT_INTRO_SKILLS_OTHER,
    } = useLang();

    return (
        <main className={globals.pageContainer}>
            <HeadMeta name="title" content={`${DEV_FULLNAME} - ${TEXT_DEV_JOBS}`} />

            <div className={styles.heroContainer}>
                <Hero />
            </div>

            <h1 ref={resetRef} className={styles.heading}>{HOME_TITLE}</h1>

            <section ref={resetRef}>
                <h2 className={globals.inlineSubheading}>{HOME_TITLE_DEV}</h2>
                {HOME_TEXT_INTRO_DEV}

                <div className={globals.promptBox}>
                    <Link href="#skills"><Prompt><FaCogs />{HOME_ACTION_SKILLS}</Prompt></Link>
                    <Link href="/projects"><Prompt><FaRocket />{HOME_ACTION_PROJECTS}</Prompt></Link>
                </div>
            </section>

            <section ref={resetRef}>
                {HOME_TEXT_INTRO_HIRE}
                <div className={globals.promptBox}>
                    <PromptResume />
                    <PromptContact />
                </div>
            </section>

            <section ref={resetRef}>
                <h2 className={globals.inlineSubheading}>{HOME_TITLE_TEACH}</h2>
                {HOME_TEXT_INTRO_TEACH}

                <div className={globals.promptBox}>
                    <Link href="/learn"><Prompt><FaGraduationCap />{HOME_ACTION_LEARN}</Prompt></Link>
                </div>
            </section>

            <section id="skills" ref={resetRef}>
                <h2 className={globals.subheading}>{HOME_TITLE_SKILLS_MAIN}</h2>
                {HOME_TEXT_INTRO_SKILLS_MAIN}

                <SkillsList elements={[html, css, js, react, node, next, mysql, maria, mongo, sass, less, git, seo]} />
            </section>

            <section ref={resetRef}>
                <h2 className={globals.subheading}>{HOME_TITLE_SKILLS_OTHER}</h2>
                {HOME_TEXT_INTRO_SKILLS_OTHER}

                <SkillsList elements={[php, ruby, svelte, wordpress, gdscript]} />
            </section>
        </main>
    );
}
