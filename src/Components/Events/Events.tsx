import styles from "./Events.module.css";
import img from "./assets/a4b43559a5f3a8b9a7986a561e1a9619.png";
import data from "../../../data.json";

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
                        <span>{data["events"][0].month}</span>
                        <span>{data["events"][0].date}</span>
                    </div>
                    <div className={styles.text}>
                        <strong>{data["events"][0].head}</strong>
                        <span>{data["events"][0].para}</span>
                    </div>
                </div>
                <img src={data["events"][0].img} alt="" />
            </div>
            {data.events.slice(1).map((event, index) => {
                return (
                    <div
                        className={styles.card + " " + styles.small}
                        key={index}
                    >
                        <div className={styles.content}>
                            <div className={styles.date}>
                                <span>{event.month}</span>
                                <span>{event.date}</span>
                            </div>
                            <div className={styles.text}>
                                <strong>{event.head}</strong>
                                <span>{event.para}</span>
                            </div>
                        </div>
                        <img src={event.img} alt="" />
                    </div>
                );
            })}
        </div>
    );
};

export default Events;
