import { useRouter } from "next/router";
import Courses from "../../../components/courses";
import { getAvailableCourseSubjects } from "../../../services/courses";

export function getStaticProps({ locales }) {
    const props = { subjects: getAvailableCourseSubjects(locales) };
    return { props };
}

export default function Page({ subjects }) {
    const { locale } = useRouter();
    return <Courses langSubjects={subjects[locale]} />;
}