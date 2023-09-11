import styles from "./Events.module.css";
import img from "./assets/a4b43559a5f3a8b9a7986a561e1a9619.png";
const Events = () => {
    const mainCard = {
        month: "Sep",
        date: "29",
        head: "Opportunities in TCS EIS",
        para: "Webinar on Engineering and Industrial Services division of TCS.",
        img: img,
    };
    const cardData = [
        {
            month: "Sep",
            date: "29",
            head: "Opportunities in TCS EIS",
            para: "Webinar on Engineering and Industrial Services division of TCS.",
            img: img,
        },
        {
            month: "Sep",
            date: "29",
            head: "Opportunities in TCS EIS",
            para: "Webinar on Engineering and Industrial Services division of TCS.",
            img: img,
        },
        {
            month: "Sep",
            date: "29",
            head: "Opportunities in TCS EIS",
            para: "Webinar on Engineering and Industrial Services division of TCS.",
            img: img,
        },
    ];

    return (
        <div className={styles.events}>
            <h2>Our Event Journey</h2>
            <div className={styles.card + " " + styles.large}>
                <div className={styles.content}>
                    <div className={styles.date}>
                        <span>{mainCard.month}</span>
                        <span>{mainCard.date}</span>
                    </div>
                    <div className={styles.text}>
                        <strong>{mainCard.head}</strong>
                        <span>{mainCard.para}</span>
                    </div>
                </div>
                <img src={mainCard.img} alt="" />
            </div>
            {cardData.map((data) => {
                return (
                    <div className={styles.card + " " + styles.small}>
                        <div className={styles.content}>
                            <div className={styles.date}>
                                <span>{data.month}</span>
                                <span>{data.date}</span>
                            </div>
                            <div className={styles.text}>
                                <strong>{data.head}</strong>
                                <span>{data.para}</span>
                            </div>
                        </div>
                        <img src={data.img} alt="" />
                    </div>
                );
            })}
        </div>
    );
};

export default Events;
