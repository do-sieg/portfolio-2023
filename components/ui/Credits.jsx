const styles = {
    container: {
        fontSize: "large",
        fontStyle: "italic",
    },
}

export default function Credits({ text, name, link }) {
    return <span style={styles.container}>
        {text} {link ? <a href={link} target="_blank" rel="noreferrer">{name}</a> : <span>{name}</span>}
    </span>;
}