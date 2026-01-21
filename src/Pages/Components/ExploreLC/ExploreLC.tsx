import styles from "./ExploreLC.module.css";
import image from "./assets/explorelc.svg";

const ExploreLC = () => {
    return (
        <div className={styles.exploreLCWrapper}>
            <div className={styles.imageWrapper}>
                <img src={image} alt="" />
            </div>
            <div className={styles.contentWrapper}>
                <h1>Explore Learning Circles</h1>
                <p>
                    An informal mechanism for bringing together learners who are
                    interested in the same topic from across different fields
                    and disciplines. A fantastic way to spend a small amount of
                    time learning about new things with a group of people with
                    same interests!
                </p>
                <a target="_blank" href="https://app.mulearn.org/learning-circle">
                    Create/Join Learning Circles
                </a>
            </div>
        </div>
    );
};

export default ExploreLC;