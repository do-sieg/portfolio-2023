import Image from "next/image";
import { useClientSize } from "../../hooks/clientSize";
import styles from "./PageCover.module.css";

export default function PageCover({ src, srcSmall = null, alt }) {
    const { width } = useClientSize();
    
    return <Image className={styles.container} src={width > 600 ? src : srcSmall} alt={alt} placeholder="blur" priority />;
}