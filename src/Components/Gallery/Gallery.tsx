import Marquee from "react-fast-marquee";
import styles from "./Gallery.module.css";
import data from '../../../data.json'

const Gallery = () => {
    const marqParams = {
        autoFill: true,
        pauseOnHover: true,
    };

    return (
        <div className={styles.gallery} id="gallery">
            <h2>Memories</h2>
            <div className={styles.row}>
                <Marquee {...marqParams} style={{ width: "100vw" }}>
                    {data.gallery.row1.map((src) => (
                        <div className={styles.imgContainer}>
                            <img src={src.image} loading="lazy" />
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className={styles.row}>
                <Marquee
                    direction="right"
                    {...marqParams}
                    style={{ width: "100vw" }}
                >
                    {data.gallery.row2.map((src) => (
                        <div className={styles.imgContainer}>
                            <img src={src.image} loading="lazy" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;
