import styles from "./Footer.module.css";
import { Instagram, Twitter, Facebook, LinkedIn } from "./assets/svg";
import { ULearnWhite } from "../../assets/svg/svg";

const Footer = () => {
  return (
    <div className={styles.FooterWrapper}>
      <div className={styles.topFooter}>
        <ULearnWhite />
        <p>
          Reach us at <a href="mailto:mulearn@cce.edu.in">mulearn@cce.edu.in</a>
        </p>
        <div>
          <a href="">µLearn</a>
          <a href="">Events</a>
          <a href="">Gallery</a>
          <a href="">Branding</a>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <a href="">
          <LinkedIn />
          LinkedIn
        </a>
        <a href="">
          <Instagram />
          Instagram
        </a>
        <a href="">
          <Twitter />
          Twitter
        </a>
        <a href="">
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
