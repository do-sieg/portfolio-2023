/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DEV_EMAIL, DEV_LINDEKIN } from "../data/dev";

export const DEV_JOBS = "Web Developer & Teacher";

// export const LOCALE_DATE_FORMAT = "YY-M-D";

export const ACTION_VISIT = "Visit";
export const ACTION_CONTACT = "Contact me";
export const ACTION_RESUME = "Download my resume";

export const TEXT_READING_TIME = (min) => `${min} min read`;
export const TEXT_PHOTO_CREDITS = "Photo Credits:";
export const TEXT_DRAFT = "Draft";

export const NAV_ACTION_LEARN = "Learn";
export const NAV_ACTION_COURSES = "Courses";
export const NAV_ACTION_PROJECTS = "Projects";
export const NAV_ACTION_BLOG = "Blog";

export const HOME_TITLE = "Hi, I'm Daniel.";
export const HOME_TITLE_MAIN_SKILLS = "Main Stack";
export const HOME_TITLE_OTHER_SKILLS = "Other Skills";
export const HOME_ACTION_PROJECTS = "My Projects";
export const HOME_ACTION_SKILLS = "My Skills";
export const HOME_ACTION_LEARN = "Learn Coding";
export const HOME_TEXT_INTRO_DEV = (
    <>
        <p>I'm a <strong>web developer</strong>, I work in <b>companies</b> and as a <strong>freelancer</strong>.
            My experience on both fronts has taught me to meet all kinds of needs, for all types of projects.</p>
        <p><b>Hiring</b>? Looking for a professional to <strong>build a website</strong>?
            I bring you the <strong>expertise</strong> you need to achieve <strong>the best results</strong>.</p>
    </>
);
export const HOME_TEXT_INTRO_TEACH = (
    <p>I also <strong>teach</strong>. Whether in a group or individually, I help my students achieve their potential on their way to success.</p>
);

export const PROJECTS_TITLE = "My Projects";
export const PROJECTS_TITLE_CLIENTS = "Client Projects";
export const PROJECTS_TITLE_OWN = "Personal Projects";
export const PROJECTS_TITLE_DEMO = "Demos";
export const PROJECTS_TITLE_OLD = "Old Projects";
export const PROJECTS_ACTION_GITHUB = "Check on GitHub";
export const PROJECTS_ACTION_CODE = "Code";
export const PROJECTS_TEXT_INTRO = (
    <p>Here are some examples of my work as a freelancer, recent and past. You can also check my GitHub account for other projects I'm currently working on.</p>
);

export const LEARN_TITLE = "Learn Coding";
export const LEARN_TITLE_TEACHING = "Teaching & Online Lessons";
export const LEARN_ACTION_COURSES = "Start a course";
export const LEARN_TEXT_INTRO = (
    <p>In addition to being a developer, my other passion is <strong>teaching</strong>. I teach online and in group sessions. I also provide <strong>courses</strong> for beginners to help them find their way around.</p>
);
export const LEARN_TEXT_TEACHING = (
    <>
        <p>I have been a professional teacher for six years. I apply those skills today to help aspiring developers.</p>
        <p>I've conducted <strong>training sessions</strong> on web languages, frameworks and tools. I also help with <strong>private sessions</strong> depending on my availability. If you're looking for a teacher, you can <a href={`mailto:${DEV_EMAIL}`}>contact me</a>.</p>
    </>
);

export const COURSES_TITLE = "Development Courses";
export const COURSES_ACTION_ALL_COURSES = "All Courses";
export const COURSES_TEXT_INTRO = (
    <>
        <p>These courses are broken down to be <b>short</b> and <b>get to the point</b>. I try to use understandable language, but I still explain technical terms so you can learn them as you go on.</p>
        <p>I plan to cover several languages and frameworks, in the most complete way possible. Courses will be updated to reflect new developments.</p>
    </>
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
            FIRST_STEPS: "First Steps"
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
    javascript: "JavaScript",
    jobs: "Jobs",
}
export const BLOG_TEXT_READ_MORE_CATEGORY = (categoryId) => <>More in <Link href={`/blog/category/${categoryId}`}>{BLOG_TEXT_CATEGORIES[categoryId]}</Link></>;
export const BLOG_TEXT_SEE_ALL_POSTS = (n) => `${n} post${n > 1 ? "s" : ""}`;