import axios from "axios";
import validator from "validator";
import { useRouter } from "next/router";
import { useState } from "react";
import { useResetAnimations } from "../../hooks/animation";
import { useLang } from "../../hooks/lang";
import HeadMeta from "../meta/HeadMeta";
import Loader from "../ui/Loader";
import globals from "../../styles/globals.module.css";
import styles from "./Contact.module.css";

const MAX_MESSAGE_LENGTH = 2000;

export default function Contact() {
    const { locale, push } = useRouter();
    const { resetRef } = useResetAnimations([locale]);
    const {
        ACTION_BACK,
        ACTION_SEND,
        ERR_FORM_REQUIRED,
        ERR_FORM_NOT_VALID_EMAIL,
        CONTACT_TITLE,
        CONTACT_LABEL_EMAIL,
        CONTACT_LABEL_SUBJECT,
        CONTACT_LABEL_TEXT,
        CONTACT_TEXT_REMAINING_CHARACTERS,
        CONTACT_TEXT_LOADING,
        CONTACT_TEXT_SUCCESS,
    } = useLang();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    const [formErrors, setFormErrors] = useState({});

    const handleChangeEmail = e => setEmail(e.target.value.substr(0, 50));
    const handleChangeSubject = e => setSubject(e.target.value.substr(0, 50));
    const handleChangeText = e => setText(e.target.value.substr(0, MAX_MESSAGE_LENGTH));

    function checkFormValues() {
        const errors = {};

        if (email.length === 0) errors.email = ERR_FORM_REQUIRED;
        else if (!validator.isEmail(email)) errors.email = ERR_FORM_NOT_VALID_EMAIL;
        if (subject.length === 0) errors.subject = ERR_FORM_REQUIRED;
        if (text.length === 0) errors.text = ERR_FORM_REQUIRED;

        return { success: Object.values(errors).length === 0, errors };
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { success, errors } = checkFormValues();
            setFormErrors(errors);
            if (!success) return;

            setLoading(true);
            await axios.post("/api/contact", { from: email, subject, text });
            setSuccess(true);
        } catch (err) {
            console.error(err.message);
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <main className={globals.pageContainer}>
                <HeadMeta name="title" content={CONTACT_TITLE} />
                <Loader message={CONTACT_TEXT_LOADING} />
            </main>
        );
    }

    if (error) {
        return (
            <main className={globals.pageContainer}>
                <HeadMeta name="title" content={CONTACT_TITLE} />
                <div className={styles.messageContainer}>
                    <span>{error.message}</span>
                    <button className={globals.btn} onClick={() => setError(null)}>{ACTION_BACK}</button>
                </div>
            </main>
        );
    }

    if (success) {
        return (
            <main className={globals.pageContainer}>
                <HeadMeta name="title" content={CONTACT_TITLE} />
                <div className={styles.messageContainer}>
                    <span>{CONTACT_TEXT_SUCCESS}</span>
                    <button className={globals.btn} onClick={() => push("/")}>{ACTION_BACK}</button>
                </div>
            </main>
        );
    }

    return (
        <main className={globals.pageContainer}>
            <HeadMeta name="title" content={CONTACT_TITLE} />

            <h1 ref={resetRef} className={globals.heading}>{CONTACT_TITLE}</h1>

            <form ref={resetRef} className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="email" className={styles.formLabel}>{CONTACT_LABEL_EMAIL}</label>
                <input id="email" type="email" value={email} onChange={handleChangeEmail} />
                <span className={styles.formError}>{formErrors.email}</span>

                <label htmlFor="subject" className={styles.formLabel}>{CONTACT_LABEL_SUBJECT}</label>
                <input id="subject" value={subject} onChange={handleChangeSubject} />
                <span className={styles.formError}>{formErrors.subject}</span>

                <label htmlFor="text" className={styles.formLabel}>{CONTACT_LABEL_TEXT}</label>
                <textarea id="text" value={text} onChange={handleChangeText} rows="8" />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className={styles.formError}>{formErrors.text}</span>
                    <span className={styles.remainingCharacters + " " + (text.length === MAX_MESSAGE_LENGTH ? styles.max : "")}>{CONTACT_TEXT_REMAINING_CHARACTERS(text, MAX_MESSAGE_LENGTH)}</span>
                </div>

                <button className={globals.btn}>{ACTION_SEND}</button>
            </form>
        </main>
    );
}