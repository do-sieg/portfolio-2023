import cn from "classnames";
import { useState } from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import globals from "../../styles/globals.module.css";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onClear, defaultValue = "" }) {
    const [value, setValue] = useState(defaultValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") handleSubmit(e);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (onSearch) onSearch(value);
        else console.error(`onSearch is not a function. Got: ${onSearch}`);
    }

    function handleClear(e) {
        e.preventDefault();
        setValue("");
        if (onClear) onClear();
        else console.error(`onClear is not a function. Got: ${onSearch}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input type="search" value={value} onChange={handleChange} onKeyDown={handleKeyDown} />
                <button className={styles.clearBtn} style={{ display: value === "" ? "none" : "initial" }} onClick={handleClear}><FaTimesCircle /></button>
            </div>
            <button className={cn(globals.btn, styles.searchBtn)} onClick={handleSubmit}><FaSearch /></button>
        </div>
    );
}