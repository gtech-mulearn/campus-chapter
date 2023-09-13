import Marquee from "react-fast-marquee";
import styles from "./Gallery.module.css";
import assets from "./assets";
import data from '../../../data.json'

const Gallery = () => {
    const row1 = [assets.img1, assets.img2];
    const row2 = [assets.img3, assets.img4];
    const marqParams = {
        autoFill: true,
        pauseOnHover: true,
    };

    return (
        <div className={styles.gallery}>
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
                        //
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;
