import style from "./Home.module.css";
const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.welcome}>Welcome to the</div>
            <div className={style.muverse}>µverse</div>
            <div className={style.college}>{`at ${import.meta.env.VITE_COLLEGE}`}</div>
        </div>
    );
};

export default Home;
