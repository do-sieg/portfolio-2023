import Image from "next/image";
import styles from "./PageCover.module.css";

export default function PageCover({ src, alt }) {
    return <Image className={styles.container} src={src} alt={alt} placeholder="blur" />
}