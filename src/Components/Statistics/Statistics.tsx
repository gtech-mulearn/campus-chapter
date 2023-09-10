import styles from "./Statistics.module.css";
import { ULearn } from "../../assets/svg/svg";

const Statistics = () => {
  return (
    <div className={styles.StatWrapper}>
      <h1>Our Statistics</h1>
      <div className={styles.contentDiv}>
        <div className={styles.leftContainer}>
          <div>
            <h3>100+</h3>
            <p>STUDENTS</p>
            <p>ENROLLED</p>
          </div>
          <div>
            <h3>20+</h3>
            <p>LEARNING</p>
            <p>CIRCLES</p>
          </div>
          <div>
            <h3>05+</h3>
            <p>INTEREST</p>
            <p>GROUPS</p>
          </div>
          <div>
            <h3>80K+</h3>
            <p>KARMA</p>
            <p>MINED</p>
          </div>
        </div>
        <div>
          <ULearn />
          <h2>Rank:120</h2>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
