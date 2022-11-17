import { DiRuby } from "react-icons/di";
import { FaCss3, FaGitAlt, FaHtml5, FaJsSquare, FaLess, FaNodeJs, FaPaperPlane, FaPhp, FaReact, FaSass, FaSearchengin, FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiGodotengine, SiMongodb, SiNextdotjs } from "react-icons/si";

export const DEV_FIRSTNAME = "Daniel";
export const DEV_LASTNAME = "Orchanian";
export const DEV_FULLNAME = `${DEV_FIRSTNAME} ${DEV_LASTNAME}`;
export const DEV_RESUME_PATH = {
    fr: "/files/CV_Daniel_Orchanian_Dev_2022-09_FR.pdf",
    en: "/files/CV_Daniel_Orchanian_2021-11_EN.pdf",
};

export const DEV_TECHS = {
    html: { name: "HTML", icon: <FaHtml5 /> },
    css: { name: "CSS", icon: <FaCss3 /> },
    js: { name: "JavaScript", icon: <FaJsSquare /> },
    react: { name: "ReactJS", icon: <FaReact /> },
    node: { name: "NodeJS", icon: <FaNodeJs /> },
    next: { name: "NextJS", icon: <SiNextdotjs /> },
    mysql: { name: "MySQL", icon: <GrMysql /> },
    php: { name: "MySQL", icon: <FaPhp /> },
    ruby: { name: "Ruby", icon: <DiRuby /> },
    gdscript: { name: "GDScript", icon: <SiGodotengine /> },
    mongo: { name: "MongoDB", icon: <SiMongodb /> },
    wordpress: { name: "Wordpress", icon: <FaWordpress /> },
    sass: { name: "Sass", icon: <FaSass /> },
    less: { name: "Less", icon: <FaLess /> },
    git: { name: "Git", icon: <FaGitAlt /> },
    seo: { name: "SEO", icon: <FaSearchengin /> },
    nocode: { name: "No Code", icon: <FaPaperPlane /> },
}
