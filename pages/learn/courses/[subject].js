import CourseSubject from "../../../components/courses/CourseSubject";
import { getLessonTree, getSubjectPaths } from "../../../services/courses";

export function getStaticPaths({ locales }) {
    return { paths: getSubjectPaths(locales), fallback: false };
}

export function getStaticProps({ params, locale }) {
    return { props: {
        subject: params.subject,
        lessonTree: getLessonTree(locale, params.subject),
    } };
}

export default function Page({ subject, lessonTree }) {
    return <CourseSubject subject={subject} lessonTree={lessonTree} />;
}
