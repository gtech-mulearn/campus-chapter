import styles from "./Home.module.css";
import image from "./assets/homeimg.svg";
import { BlueStar, WhiteStar, Mu } from "./assets/svg";
import data from '../../../data.json'

const Home = () => {
    return (
        <div id="home" className={styles.HomeWrapper}>
            <div className={styles.contentWraper}>
                <h1>Welcome to the</h1>
                <h2>µverse</h2>
                <p>{data.college}</p>
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
            <div className={styles.start5}>
                <Mu size="23vw" rotate="30deg" />
            </div>
            <div className={styles.start6}>
                <Mu size="15vw" rotate="30deg" />
            </div>{" "}
            <div className={styles.start7}>
                <Mu size="15vw" rotate="-10deg" />
            </div>{" "}
            <div className={styles.start8}>
                <Mu size="7vw" rotate="-10deg" />
            </div>
        </div>
    );
};

export default Home;