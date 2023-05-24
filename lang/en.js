/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DEV_LINDEKIN } from "../data/dev";

export const ACTION_BACK = "Back";
export const ACTION_SEND = "Send";
export const ACTION_ACCEPT_SETTINGS = "I accept";
export const ACTION_REFUSE_SETTINGS = "No thanks";
export const ACTION_VISIT = "Visit";
export const ACTION_CONTACT = "Email me";
export const ACTION_RESUME = "Download my resume";
export const ACTION_LINKEDIN = "LinkedIn";
export const ACTION_SUPERPROF = "Superprof";
export const ACTION_LOAD_MORE = "Load More";

export const TEXT_DEV_JOBS = "Web Developer & Teacher";
export const TEXT_READING_TIME = (min) => `${min} min read`;
export const TEXT_PHOTO_CREDITS = "Photo Credits:";
export const TEXT_DRAFT = "Draft";
export const TEXT_ACCEPT_SETTINGS = (
    <p>
        We use our own and third-party cookies to improve your experience and to analyze the use of our website.
        If you agree with our use of cookies, click <b>{ACTION_ACCEPT_SETTINGS}</b>.
    </p>
);
export const TEXT_SEARCH_RESULTS_FOR = (value) => `Search results for '${value}'`;

export const NAV_ACTION_LEARN = "Learn";
export const NAV_ACTION_COURSES = "Courses";
export const NAV_ACTION_PROJECTS = "Portfolio";
export const NAV_ACTION_BLOG = "Blog";

export const ERR_404_TITLE = "404";
export const ERR_404_ACTION_HOME = "Home Page";
export const ERR_404_TEXT_MESSAGE = "Page not found";
export const ERR_FORM_REQUIRED = "This field is required";
export const ERR_FORM_NOT_VALID_EMAIL = "Please enter a valid e-mail adress";

export const HOME_TITLE_DEV = "Fullstack Developer";
export const HOME_TITLE_TEACH = "Training & Courses";
export const HOME_TEXT_INTRO_DEV = (
    <>
        <p><strong>I build websites and apps for companies and individuals.</strong></p>
        <p><b>Have a project in mind? Let's connect!</b></p>
    </>
);
export const HOME_TEXT_INTRO_TEACH = (
    <>
        <p><strong>I also give online courses.</strong></p>
        <p><b>Stuck on a project?<br />Come and tell me about it!</b></p>
    </>
);
export const HOME_FIRST_HOUR_FREE = "1st hour is free!";

export const PROJECTS_TITLE = "My Portfolio";
export const PROJECTS_TITLE_CLIENTS = "Client Projects";
export const PROJECTS_TITLE_OWN = "Personal Projects";
export const PROJECTS_TITLE_SCRIPTS = "Scripts";
export const PROJECTS_TITLE_DEMO = "Demos";
export const PROJECTS_TITLE_OLD = "Old Projects";
export const PROJECTS_ACTION_GITHUB = "Check on GitHub";
export const PROJECTS_ACTION_CODE = "Code";
export const PROJECTS_TEXT_INTRO = (
    <p>Here are some examples of my work as a freelancer, recent and past. You can also check my GitHub account for other projects I'm currently working on.</p>
);

export const LEARN_TITLE = "Learning Together";
export const LEARN_TITLE_REVIEWS = "They trusted me";
export const LEARN_TEXT_INTRO = (
    <>
        <p>
            Before becoming a full time developer, I used to be a <b>teacher</b>.
        </p>
        <p>
            This experience allows me today to help young developers on their learning path.
            I am a <strong>trainer</strong> on web languages, frameworks and other tools.
        </p>
    </>
);
export const LEARN_TEXT_OPENCLASSROOMS = (
    <p>I also work as a <b>mentor</b> at <strong>OpenClassrooms</strong>.</p>
);

export const COURSES_TITLE = "Development Courses";
export const COURSES_ACTION_ALL_COURSES = "All Courses";
export const COURSES_TEXT_INTRO_1 = (
    <p>These courses are broken down to be <b>short</b> and <b>get to the point</b>. I try to use understandable language, but I still explain technical terms so you can learn them as you go on.</p>
);
export const COURSES_TEXT_INTRO_2 = (
    <p>I plan to cover several languages and frameworks, in the most complete way possible. Courses will be updated to reflect new developments.</p>
);
export const COURSES_TEXT_LESSON_AMOUNT = (value) => `${value} lesson${value > 1 ? "s" : ""}`;
export const COURSES_TEXT_NO_COURSE = "No lessons in this language yet. Coming soon.";
export const COURSES_TEXT_CATEGORIES = {
    WEB_LANGUAGES: "Web Languages",
};
export const COURSES_TEXT_LEVELS = {
    basic: "Basic",
    intermediate: "Intermediate",
    advanced: "Advanced",
};
export const COURSES_DATA_SUBJECTS = {
    html: {
        name: "HTML",
        desc: "The language structuring all web pages.",
        intro: <p>HTML (HyperText Markup Language) is used to structure a web page and its content. It is a tag language used on all the internet, and one of the fundamentals of web development.</p>,
        subSections: {
            FIRST_STEPS: "First Steps",
            BASIC_TAGS: "Basic Tags",
        },
    },
};

export const BLOG_TITLE = "Blog";
export const BLOG_TITLE_RECENT = "Latest Posts";
export const BLOG_DATE_FORMAT = (dateString) => {
    const d = new Date(dateString);
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};
export const BLOG_ACTION_ALL_CATEGORIES = "All Posts";
export const BLOG_ACTION_DRAFTS = "Drafts";
export const BLOG_TEXT_PROMPT = <p>Be sure to follow me on <a href={DEV_LINDEKIN} target="_blank" rel="noreferrer">LinkedIn <FaExternalLinkAlt /></a> to get notified on new content.</p>
export const BLOG_TEXT_INTRO = (
    <>
        <p>My latest articles about programming, technologies, life as a developer... and a lot of other things.</p>
        {BLOG_TEXT_PROMPT}
    </>
);
export const BLOG_TEXT_AUTHOR_DESC = (
    <>
        <p>I'm a developer and teacher, and there's a lot of things in my line of work I like to write about.</p>
        {BLOG_TEXT_PROMPT}
    </>
)
export const BLOG_TEXT_CATEGORIES = {
    draft: "Brouillons",
    code: "Code",
    development: "Development",
    frontend: "Frontend",
    javascript: "JavaScript",
    jobs: "Jobs",
    project_management: "Project Management",
}
export const BLOG_TEXT_READ_MORE_CATEGORY = (categoryId) => <>More in <Link href={`/blog/category/${categoryId}`}>{BLOG_TEXT_CATEGORIES[categoryId]}</Link></>;
export const BLOG_TEXT_SEE_ALL_POSTS = (n) => `${n} post${n > 1 ? "s" : ""}`;
export const BLOG_TEXT_NO_SEARCH_RESULTS = "Couldn't match any article.";

export const CONTACT_TITLE = "Contact Me";
export const CONTACT_LABEL_EMAIL = "Email";
export const CONTACT_LABEL_SUBJECT = "Subject";
export const CONTACT_LABEL_TEXT = "Message";
export const CONTACT_TEXT_REMAINING_CHARACTERS = (text, max) => `${text.length}/${max}`;
export const CONTACT_TEXT_LOADING = "Sending email...";
export const CONTACT_TEXT_SUCCESS = "Thanks for your message. I'll contact you back as soon as possible.";