import styles from "./Home.module.css";
import image from "./assets/homeimg.svg";
import { BlueStar, WhiteStar,Mu } from "./assets/svg";

const Home = () => {
  return (
    <div id="home" className={styles.HomeWrapper}>
      <div className={styles.contentWraper}>
        <h1>Welcome to the</h1>
        <h2>µverse</h2>
        <p>at Christ College of Engineering!</p>
      </div>
      <img src={image} alt="" />
      <div className={styles.start1}>
        <BlueStar size="50px" />
      </div>{" "}
      <div className={styles.start2}>
        <BlueStar size="70px" />
      </div>{" "}
      <div className={styles.start3}>
        <WhiteStar size="40px" />
      </div>
      <div className={styles.start4}>
        <WhiteStar size="40px" />
      </div>{" "}
      <div className={styles.start4}>
        <Mu size="40px" />
      </div>
    </div>
  );
};

export default Home;
