import React from "react";
import styles from "./Achievements.module.css";
import data from "../../../../data.json";
import Marquee from "react-fast-marquee";

export interface AchievementDetails {
  title: string;
  description: string;
  images: string[];
}

const Achievements: React.FC = () => {
  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
  };

  return (
    <div className={styles.achievements} id="achievements">
      {data.achievements.length > 0 && (
        <>
          <h2>Our Achievements</h2>

          <div className={styles.achievementsContainer}>
            {data.achievements.map(
              (achievement: AchievementDetails, index: number) => (
                <div key={index} className={styles.achievementCard}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.achievementTitle}>
                      {achievement.title}
                    </h3>
                    <p className={styles.achievementDescription}>
                      {achievement.description}
                    </p>
                  </div>

                  <div className={styles.imageGallery}>
                    <Marquee
                      direction={index % 2 == 0 ? "left" : "right"}
                      {...marqParams}
                      className={styles.marqueeContainer}
                    >
                      {achievement.images.map((src, imgIndex) => (
                        <div key={imgIndex} className={styles.imgContainer}>
                          <img
                            src={src}
                            alt={`${achievement.title} - Image ${imgIndex + 1}`}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </Marquee>
                  </div>
                </div>
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Achievements;
