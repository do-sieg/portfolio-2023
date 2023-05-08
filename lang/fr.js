/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DEV_LINDEKIN } from "../data/dev";

export const ACTION_BACK = "Retour";
export const ACTION_SEND = "Envoyer";
export const ACTION_ACCEPT_SETTINGS = "J'ai compris";
export const ACTION_REFUSE_SETTINGS = "Non merci";
export const ACTION_VISIT = "Visiter";
export const ACTION_CONTACT = "E-mail";
export const ACTION_RESUME = "Télécharger mon CV";
export const ACTION_LOAD_MORE = "Voir plus de posts";

export const TEXT_DEV_JOBS = "Développeur/Formateur Web";
export const TEXT_READING_TIME = (min) => `${min} min de lecture`;
export const TEXT_PHOTO_CREDITS = "Crédits Photo :";
export const TEXT_DRAFT = "Brouillon";
export const TEXT_ACCEPT_SETTINGS = (
    <p>
        Nous utilisons nos propres cookies et ceux de tiers pour améliorer votre expérience et analyser l'utilisation de notre site web.
        Pour accepter notre utilisation des cookies, cliquez sur <b>{ACTION_ACCEPT_SETTINGS}</b>.
    </p>
);
export const TEXT_SEARCH_RESULTS_FOR = (value) => `Résultats de recherche pour '${value}'`;

export const NAV_ACTION_LEARN = "Apprendre";
export const NAV_ACTION_COURSES = "Cours";

export const ERR_404_ACTION_HOME = "Revenir à la page d'accueil";
export const ERR_404_TEXT_MESSAGE = "Page introuvable";
export const ERR_FORM_REQUIRED = "Ce champ est obligatoire";
export const ERR_FORM_NOT_VALID_EMAIL = "Veuillez saisir une adresse e-mail valide";

export const HOME_TITLE_DEV = "Développeur Fullstack";
export const HOME_TITLE_TEACH = "Formations & Cours";
export const HOME_TEXT_INTRO_DEV = (
    <>
        <p><strong>Je développe des sites et des applications pour les entreprises et les particuliers.</strong></p>
        <p><b>Une idée de projet ? Mettons-nous en relation !</b></p>
    </>
);
export const HOME_TEXT_INTRO_TEACH = (
    <>
        <p><strong>Je donne également des cours en ligne.</strong></p>
        <p><b>Bloqué sur un projet ?<br />Venez m'en parler !</b></p>
    </>
);
export const HOME_FIRST_HOUR_FREE = "1ère heure offerte !";

export const PROJECTS_TITLE = "Mon Portfolio";
export const PROJECTS_TITLE_CLIENTS = "Projets clients";
export const PROJECTS_TITLE_OWN = "Projets personnels";
export const PROJECTS_TITLE_SCRIPTS = "Scripts";
export const PROJECTS_TITLE_DEMO = "Démos";
export const PROJECTS_TITLE_OLD = "Anciens projets";
export const PROJECTS_ACTION_GITHUB = "Accéder à GitHub";
export const PROJECTS_TEXT_INTRO = (
    <p>Quelques exemples de mes réalisations, récentes et passées, en tant que free-lance. Vous pouvez également accéder à d'autres projets sur lesquels je travaille actuellement sur mon compte GitHub.</p>
);

export const LEARN_TITLE = "Apprendre ensemble";
export const LEARN_TITLE_REVIEWS = "Ils m'ont fait confiance";
export const LEARN_TEXT_INTRO = (
    <>
        <p>
            Avant de me dédier pleinement au développement, j'ai fait carrière dans l'<b>enseignement</b>.
        </p>
        <p>
            Cette expérience me permet aujourd'hui d'accompagner les développeurs dans leur parcours.
            Je suis <strong>formateur</strong> sur les langages du web, les frameworks et autres outils.
        </p>
    </>
);
export const LEARN_TEXT_OPENCLASSROOMS = (
    <p>Je suis également <b>mentor</b> chez <strong>OpenClassrooms</strong>.</p>
);

export const COURSES_TITLE = "Cours de développement";
export const COURSES_ACTION_ALL_COURSES = "Tous les cours";
export const COURSES_TEXT_INTRO_1 = (
    <p>Les cours que je mets à disposition ici sont découpés de façon à être <b>concis</b> et <b>aller à l'essentiel</b>. J'essaie d'utiliser un langage clair, tout en expliquant les termes techniques pour que vous puissiez les apprendre en cours de route.</p>
);
export const COURSES_TEXT_INTRO_2 = (
    <p>Mon objectif à long terme sera de couvrir plusieurs langages et frameworks, de la façon la plus complète possible. Les cours seront régulièrement mis à jour pour refléter les nouveautés des différents sujets.</p>
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
    frontend: "Frontend",
    javascript: "JavaScript",
    jobs: "Emploi",
    project_management: "Gestion de projet",
}
export const BLOG_TEXT_READ_MORE_CATEGORY = (categoryId) => <>Articles dans <Link href={`/blog/category/${categoryId}`}>{BLOG_TEXT_CATEGORIES[categoryId]}</Link></>;
export const BLOG_TEXT_SEE_ALL_POSTS = (n) => `Voir les ${n} article${n > 1 ? "s" : ""}`;
export const BLOG_TEXT_NO_SEARCH_RESULTS = "Aucun résultat pour cette recherche.";

export const CONTACT_TITLE = "Contact";
export const CONTACT_LABEL_EMAIL = "E-mail";
export const CONTACT_LABEL_SUBJECT = "Sujet";
export const CONTACT_TEXT_LOADING = "Envoi de l'e-mail...";
export const CONTACT_TEXT_SUCCESS = "Merci pour votre message. Je vous recontacte dès que possible.";