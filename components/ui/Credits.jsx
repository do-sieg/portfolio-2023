const styles = {
    container: {
        fontStyle: "italic",
    },
}

export default function Credits({ text, name, link }) {
    return <span style={styles.container}>
        {text} <a href={link} target="_blank" rel="noreferrer">{name}</a>
    </span>;
}