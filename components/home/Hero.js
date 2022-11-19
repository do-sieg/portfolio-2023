import Image from "next/image";
import { DEV_FIRSTNAME, DEV_FULLNAME, DEV_LASTNAME } from "../../data/dev";
import NameLogo from "../ui/NameLogo";
import profilePic from "../../public/images/dev-profile.jpg";
import styles from "./Hero.module.css";

export default function Hero({ style }) {
    return (
        <div className={styles.container} style={style}>
            <Image src={profilePic} alt={DEV_FULLNAME} placeholder="blur" />
            
            <NameLogo firstName={DEV_FIRSTNAME} lastName={DEV_LASTNAME} />
        </div>
    );
}