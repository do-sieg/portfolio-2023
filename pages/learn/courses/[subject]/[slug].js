import Lesson from "../../../../components/courses/lesson";
import { getLessonData, getLessonPaths } from "../../../../services/courses";

export function getStaticPaths({ locales }) {
    return { paths: getLessonPaths(locales), fallback: false };
}

export function getStaticProps({ locale, params }) {
    return {
        props: {
            lesson: getLessonData(locale, params.subject, params.slug),
        }
    };
}

export default function Page({ lesson }) {
    return <Lesson lesson={lesson} />;
}