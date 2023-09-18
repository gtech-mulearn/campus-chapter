import styles from "./Statistics.module.css";
import { ULearn } from "../../assets/svg/svg";
import data from "../../../data.json"
import { useEffect, useRef, useState } from "react";

const Statistics = () => {

    const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]); // Initialize counters
    const durationInSeconds = 3; // Duration in seconds

    const targetRef = useRef<HTMLDivElement>(null); // Create a ref

    const isElementInViewport = (el: HTMLElement | null) => {
        if (!el) {
            return false;
        }
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    useEffect(() => {
        const finalValues: number[] = [
            data.statistics.studentsCount ?? 0,
            data.statistics.learningCircles ?? 0,
            data.statistics.InterestGroups ?? 0,
            data.statistics.karmaEarned ?? 0,
        ];

        const startCounterAnimation = () => {
            const interval = setInterval(() => {
                setCounters((prevCounters) =>
                    prevCounters.map((counter, index) =>
                        counter < finalValues[index]
                            ? counter +
                            Math.ceil(
                                finalValues[index] / (durationInSeconds * 20)
                            ) // Increment smoothly
                            : finalValues[index]
                    )
                );
            }, 50);

            return () => clearInterval(interval);
        };

        let cleanup: (() => void) | undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    cleanup = startCounterAnimation();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        if (targetRef.current) {
            if (isElementInViewport(targetRef.current)) {
                cleanup = startCounterAnimation();
            } else {
                observer.observe(targetRef.current);
            }
        }

        return () => {
            if (cleanup) {
                cleanup();
            }
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [data.statistics]);

    return (
        <div className={styles.StatWrapper}>
            <h1>Our Statistics</h1>
            <div className={styles.contentDiv}>
                <div className={styles.leftContainer} ref={targetRef}>
                    {counters.map((counter, index) => (
                        <div key={index}>
                            <h3>
                                {index >= 0
                                    ? counter >= 2
                                        ? `${counter}+`
                                        : counter
                                    : counter.toLocaleString()}
                            </h3>
                            <p>
                                {index === 0
                                    ? "STUDENTS"
                                    : index === 1
                                        ? "LEARNING"
                                        : index === 2
                                            ? "INTEREST"
                                            : "KARMA"
                                }
                            </p>
                            <p>
                                {index === 0
                                    ? "ENROLLED"
                                    : index === 1
                                        ? "CIRCLES"
                                        : index === 2
                                            ? "GROUPS"
                                            : "MINED"}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.rightContainer}>
                    <ULearn />
                    <h2>Rank:{data.statistics.rank}</h2>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
