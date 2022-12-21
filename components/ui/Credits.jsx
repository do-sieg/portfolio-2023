import { Fragment } from "react";

const styles = {
    container: {
        fontSize: "large",
        fontStyle: "italic",
    },
}

export default function Credits({ text, name, link }) {

    function renderNames() {
        const names = Array.isArray(name) ? name : [name];
        const links = Array.isArray(link) ? link : [link];

        return names.map((name, index) => {
            return (
                <Fragment key={index}>
                    {link[index] ?
                        <a href={links[index]} target="_blank" rel="noreferrer">{name}</a>
                        :
                        <span>{name}</span>}
                    {index < names.length - 1 && <span>, </span>}
                </Fragment>
            );
        });
    }

    return <span style={styles.container}> {text} {renderNames()}</span>;
}