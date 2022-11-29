import Head from "next/head";

export default function HeadMeta({ name, content }) {
    switch (name) {
        case "title":
            return (
                <Head>
                    <title key="title">{content}</title>
                    <meta property="og:title" content={content} key="og:title" />
                    <meta name="twitter:title" content={content} key="twitter:title" />
                </Head>
            );

        case "description":
            return (
                <Head>
                    <meta name="description" content={content} key="description" />
                    <meta property="og:description" content={content} key="og:description" />
                    <meta name="twitter:description" content={content} key="twitter:description" />
                </Head>
            );

        case "image":
            return (
                <Head>
                    <meta property="og:image" content={content} key="og:image" />
                    <meta name="twitter:image" content={content} key="twitter:image" />
                </Head>
            );

        case "type":
            return (
                <Head>
                    <meta property="og:type" content={content} key="og:type" />
                </Head>
            );

        default:
            return (
                <Head>
                    <meta name={name} content={content} key={name} />
                </Head>
            );
    }
}