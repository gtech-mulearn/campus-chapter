import styles from "./Footer.module.css";
import { Instagram, Twitter, Facebook, LinkedIn } from "./assets/svg";
import { ULearnWhite } from "../../assets/svg/svg";
import data from "../../../data.json"

const Footer = () => {
    return (
        <div className={styles.FooterWrapper}>
            <div className={styles.topFooter}>
                <ULearnWhite />
                <p>
                    Reach us at{" "}
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                </p>
                <div>
                    <a target="_blank" href="https://mulearn.org/">
                        µLearn
                    </a>
                    <a target="_blank" href="https://mulearn.org/announcements">
                        Events
                    </a>
                    <a target="_blank" href="https://mulearn.org/gallery">
                        Gallery
                    </a>
                    <a target="_blank" href="https://online.fliphtml5.com/egsqr/tlgc/">
                        Branding
                    </a>
                </div>
            </div>
            <div className={styles.socialMedia}>
                <a href={data.linkedIn}>
                    <LinkedIn />
                    LinkedIn
                </a>
                <a href={data.instagram}>
                    <Instagram />
                    Instagram
                </a>
                <a href={data.twitter}>
                    <Twitter />
                    Twitter
                </a>
                <a href={data.facebook}>
                    <Facebook />
                    Facebook
                </a>
            </div>
            <div className={styles.line}></div>
            <div className={styles.ptag}>
                {" "}
                <p>Copyright © 2023. All Rights Reserved.</p>
                <p>µLearn Foundation.</p>
            </div>
        </div>
    );
};

export default Footer;
