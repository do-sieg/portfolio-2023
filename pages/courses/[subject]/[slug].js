import Lesson from "../../../components/courses/lesson/Lesson";
import { getLessonData, getLessonPaths } from "../../../services/courses";

export function getStaticPaths({ locales }) {
    return { paths: getLessonPaths(locales), fallback: false };
}

export function getStaticProps({ params, locale }) {
    return {
        props: {
            lesson: getLessonData(locale, params.subject, params.slug),
        }
    };
}

export default function Page({ lesson }) {
    return <Lesson lesson={lesson} />;
}