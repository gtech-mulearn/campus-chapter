import styles from "./Home.module.css";
import image from "./assets/homeimg.svg";

const Home = () => {
  return (
    <div className={styles.HomeWrapper}>
      <div className={styles.contentWraper}>
        <h1>Welcome to the</h1>
        <h2>µverse</h2>
        <p>at Christ College of Engineering!</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Home;
