import { useRouter } from "next/router";
import Courses from "../../../components/courses";
import { getCourseTree } from "../../../services/courses";

export function getStaticProps({ locales }) {
    const props = { courseTree: getCourseTree(locales) };
    return { props };
}

export default function Page({ courseTree }) {
    const { locale } = useRouter();
    return <Courses langCourses={courseTree[locale]} />;
}