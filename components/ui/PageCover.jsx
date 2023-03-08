import Image from "next/image";
import styles from "./PageCover.module.css";

export default function PageCover({ src, srcSmall = null, alt }) {
    return (
        <>
            <Image className={`${styles.container} ${styles.large}`} src={src} alt={alt} placeholder="blur" priority />
            {srcSmall && <Image className={`${styles.container} ${styles.small}`} src={srcSmall} alt={alt} placeholder="blur" priority />}
        </>
    );
}