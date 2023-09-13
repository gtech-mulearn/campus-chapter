import styles from "./About.module.css";

const About = () => {
    return (
        <div id="about" className={styles.AboutWrapper}>
            <h1>About Us</h1>
            <p>{import.meta.env.VITE_ABOUT}</p>
        </div>
    );
};

export default About;
