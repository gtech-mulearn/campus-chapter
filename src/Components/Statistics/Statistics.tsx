import styles from "./Statistics.module.css";
import { ULearn } from "../../assets/svg/svg";
import data from "../../../data.json"

const Statistics = () => {
    return (
        <div className={styles.StatWrapper}>
            <h1>Our Statistics</h1>
            <div className={styles.contentDiv}>
                <div className={styles.leftContainer}>
                    <div>
                        <h3>{data.statistics.studentsCount}</h3>
                        <p>STUDENTS</p>
                        <p>ENROLLED</p>
                    </div>
                    <div>
                        <h3>{data.statistics.learningCircles}</h3>
                        <p>LEARNING</p>
                        <p>CIRCLES</p>
                    </div>
                    <div>
                        <h3>{data.statistics.InterestGroups}</h3>
                        <p>INTEREST</p>
                        <p>GROUPS</p>
                    </div>
                    <div>
                        <h3>{data.statistics.karmaEarned}</h3>
                        <p>KARMA</p>
                        <p>MINED</p>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <ULearn />
                    <h2>Rank:{data.statistics.rank}</h2>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
