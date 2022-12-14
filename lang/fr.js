/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DEV_EMAIL, DEV_LINDEKIN } from "../data/dev";

export const ACTION_BACK = "Retour";
export const ACTION_SEND = "Envoyer";
export const ACTION_ACCEPT_SETTINGS = "J'ai compris";
export const ACTION_REFUSE_SETTINGS = "Non merci";
export const ACTION_VISIT = "Visiter";
export const ACTION_CONTACT = "Me contacter par e-mail";
export const ACTION_RESUME = "Télécharger mon CV";

export const TEXT_DEV_JOBS = "Développeur/Formateur Web";
export const TEXT_READING_TIME = (min) => `${min} min de lecture`;
export const TEXT_PHOTO_CREDITS = "Crédits Photo :";
export const TEXT_DRAFT = "Brouillon";
export const TEXT_ACCEPT_SETTINGS = (
    <p>Ce site web utilise des cookies uniquement pour son bon fonctionnement. Vos données personnelles ne sont pas stockées. Votre autorisation est requise pour ces cookies fonctionnels.</p>
);

export const NAV_ACTION_LEARN = "Apprendre";
export const NAV_ACTION_COURSES = "Cours";
export const NAV_ACTION_PROJECTS = "Projets";

export const ERR_404_ACTION_HOME = "Revenir à la page d'accueil";
export const ERR_404_TEXT_MESSAGE = "Page introuvable";
export const ERR_FORM_REQUIRED = "Ce champ est obligatoire";
export const ERR_FORM_NOT_VALID_EMAIL = "Veuillez saisir une adresse e-mail valide";

export const HOME_TITLE = "Bienvenue";
export const HOME_TITLE_DEV = "Je suis développeur...";
export const HOME_TITLE_TEACH = "Je suis aussi formateur et mentor...";
export const HOME_TITLE_SKILLS_MAIN = "Compétences principales";
export const HOME_TITLE_SKILLS_OTHER = "Autres compétences";
export const HOME_ACTION_PROJECTS = "Mes projets";
export const HOME_ACTION_SKILLS = "Mes compétences";
export const HOME_ACTION_LEARN = "Apprendre à coder";
export const HOME_TEXT_INTRO_DEV = (
    <p>... au service des <b>entreprises</b> et en <strong>free-lance</strong>.
        Mon double parcours m'a appris à répondre à toutes sortes de besoins, pour tous types de projets.</p>
);
export const HOME_TEXT_INTRO_HIRE = (
    <p><b>Vous recrutez</b> ? Vous cherchez un professionnel pour <strong>réaliser un site</strong>?
       Je vous fournis l'<strong>expertise</strong> que vous recherchez pour maximiser <b>vos résultats</b>.</p>
);
export const HOME_TEXT_INTRO_TEACH = (
    <p>... en <b>groupe</b> ou lors de <strong>cours particuliers</strong>, en présentiel ou <strong>en ligne</strong>. J'aide mes élèves à réaliser leur potentiel. Consultez le lien ci-dessous pour en savoir plus.</p>
);
export const HOME_TEXT_INTRO_SKILLS_MAIN = (
    <p>Je suis <strong>développeur web fullstack</strong>. Je travaille en <strong>frontend</strong> (HTML, CSS, JavaScript et frameworks) et en <strong>backend</strong> (NodeJS, NextJS), AVEC BIEN SÛR LES <strong>bases de données</strong> (MySQL/MariaDB et MongoDB).</p>
);
export const HOME_TEXT_INTRO_SKILLS_OTHER = (
    <p>D'autres langages, frameworks et outils avec lesquels j'ai travaillé au fil des ans, ou que j'ai découvert récemment.</p>
);

export const PROJECTS_TITLE = "Mes Projets";
export const PROJECTS_TITLE_CLIENTS = "Projets clients";
export const PROJECTS_TITLE_OWN = "Projets personnels";
export const PROJECTS_TITLE_DEMO = "Démos";
export const PROJECTS_TITLE_OLD = "Anciens projets";
export const PROJECTS_ACTION_GITHUB = "Accéder à GitHub";
export const PROJECTS_TEXT_INTRO = (
    <p>Quelques exemples de mes réalisations, récentes et passées, en tant que free-lance. Vous pouvez également accéder à d'autres projets sur lesquels je travaille actuellement sur mon compte GitHub.</p>
);

export const LEARN_TITLE = "Apprenez à coder";
export const LEARN_TITLE_TEACHING = "Formations et cours en ligne";
export const LEARN_ACTION_COURSES = "Commencer un cours";
export const LEARN_TEXT_INTRO = (
    <p>En plus de mon activité de développeur, mon autre passion est <strong>l'enseignement</strong>. J'interviens en ligne et dans le cadre de <strong>formations</strong> en groupe. Je mets aussi des <strong>cours</strong> à disposition des débutants pour les aider à s'y retrouver un peu.</p>
);
export const LEARN_TEXT_TEACHING_1 = (
    <p>J'ai été enseignant en secondaire pendant six ans. Je mets à profit cette expérience aujourd'hui pour accompagner les développeurs dans leur parcours.</p>
);
export const LEARN_TEXT_TEACHING_2 = (
    <p>Je donne des <strong>formations</strong> sur les langages du web, les frameworks et autres outils. Je donne aussi des <strong>cours particuliers</strong> en fonction de ma disponibilité. Vous pouvez me <a href={`mailto:${DEV_EMAIL}`}>contacter directement</a> si vous cherchez un professeur.</p>
);

export const COURSES_TITLE = "Cours de développement";
export const COURSES_ACTION_ALL_COURSES = "Tous les cours";
export const COURSES_TEXT_INTRO = (
    <>
        <p>Les cours que je mets à disposition ici sont découpés de façon à être <b>concis</b> et <b>aller à l'essentiel</b>. J'essaie d'utiliser un langage clair, tout en expliquant les termes techniques pour que vous puissiez les apprendre en cours de route.</p>
        <p>Mon objectif à long terme sera de couvrir plusieurs langages et frameworks, de la façon la plus complète possible. Les cours seront régulièrement mis à jour pour refléter les nouveautés des différents sujets.</p>
    </>
);
export const COURSES_TEXT_LESSON_AMOUNT = (value) => `${value} cours`;
export const COURSES_TEXT_NO_COURSE = "Les cours dans cette langue seront bientôt disponibles.";
export const COURSES_TEXT_CATEGORIES = {
    WEB_LANGUAGES: "Les Langages du Web",
};
export const COURSES_TEXT_LEVELS = {
    basic: "Basique",
    intermediate: "Intermédiaire",
    advanced: "Avancé",
};
export const COURSES_DATA_SUBJECTS = {
    html: {
        name: "HTML",
        desc: "Le langage qui structure toutes les pages web.",
        intro: <p>HTML (HyperText Markup Language) est le code utilisé pour structurer une page web et son contenu. C'est un langage de balises qu'on retrouve partout sur internet, et un bloc fondamental du développement web.</p>,
        subSections: {
            FIRST_STEPS: "Premiers pas en HTML",
            BASIC_TAGS: "Les Balises de base",
        },
    },
};

export const BLOG_TITLE_RECENT = "Articles récents";
export const BLOG_DATE_FORMAT = (dateString) => {
    const d = new Date(dateString);
    const months = ["JANV", "FÉVR", "MARS", "AVR", "MAI", "JUIN", "JUILL", "AOÛT", "SEPT", "OCT", "NOV", "DÉC"];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};
export const BLOG_ACTION_ALL_CATEGORIES = "Tous les articles";
export const BLOG_ACTION_DRAFTS = "Brouillons";
export const BLOG_TEXT_PROMPT = <p>N'hésitez pas à me suivre sur <a href={DEV_LINDEKIN} target="_blank" rel="noreferrer">LinkedIn <FaExternalLinkAlt /></a> pour recevoir des notifications sur le nouveau contenu.</p>
export const BLOG_TEXT_INTRO = (
    <>
        <p>Mes derniers articles sur la programmation, les technos, le quotidien du développeur... et d'autres sujets aussi.</p>
        {BLOG_TEXT_PROMPT}
    </>
);
export const BLOG_TEXT_AUTHOR_DESC = (
    <>
        <p>Je suis développeur et formateur, et dans ma profession, il y a beaucoup de choses sur lesquelles j'aime écrire.</p>
        {BLOG_TEXT_PROMPT}
    </>
)
export const BLOG_TEXT_CATEGORIES = {
    draft: "Brouillons",
    code: "Code",
    javascript: "JavaScript",
    jobs: "Emploi",
}
export const BLOG_TEXT_READ_MORE_CATEGORY = (categoryId) => <>Articles dans <Link href={`/blog/category/${categoryId}`}>{BLOG_TEXT_CATEGORIES[categoryId]}</Link></>;
export const BLOG_TEXT_SEE_ALL_POSTS = (n) => `Voir les ${n} article${n > 1 ? "s" : ""}`;

export const CONTACT_TITLE = "Contact";
export const CONTACT_LABEL_EMAIL = "E-mail";
export const CONTACT_LABEL_SUBJECT = "Sujet";
export const CONTACT_TEXT_LOADING = "Envoi de l'e-mail...";
export const CONTACT_TEXT_SUCCESS = "Merci pour votre message. Je vous recontacte dès que possible.";