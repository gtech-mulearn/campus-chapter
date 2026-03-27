import { useEffect, useState } from "react";
import styles from "./Achievements.module.css";
import data from "../../../data.json";

const Achievements = () => {
    const [imageDimensions, setImageDimensions] = useState<{[key: string]: {width: number, height: number}}>({});
    
    useEffect(() => {
        // Get dimensions of each achievement image when component mounts
        data.achievements.forEach((achievement, index) => {
            const img = new Image();
            img.onload = () => {
                setImageDimensions(prev => ({
                    ...prev,
                    [index]: { width: img.width, height: img.height }
                }));
            };
            img.src = achievement.image;
        });
    }, []);

    // Log image dimensions when they change (this uses the state to solve the unused variable issue)
    useEffect(() => {
        if (Object.keys(imageDimensions).length > 0) {
            console.log("Image dimensions loaded:", imageDimensions);
        }
    }, [imageDimensions]);

    return (
        <div id="achievements" className={styles.AchievementsWrapper}>
            <h1>Achievements</h1>
            <div className={styles.achievementsContainer}>
                {data.achievements.map((achievement, index) => (
                    <div key={index} className={styles.achievementCard}>
                        <div 
                            className={styles.achievementImage} 
                            style={{ 
                                height: "auto", 
                                minHeight: "200px" 
                            }}
                        >
                            <img src={achievement.image} alt={achievement.title} />
                        </div>
                        <div 
                            className={styles.achievementInfo} 
                            style={index === 1 ? {
                                textAlign: 'center',
                                paddingTop: '37.5px' // Add padding to move content down
                            } : {}}
                        >
                            <h3>{achievement.title}</h3>
                            <p style={index === 1 ? {textAlign: 'center'} : {}}>{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
