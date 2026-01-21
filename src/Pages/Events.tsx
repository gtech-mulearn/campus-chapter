import React, { useState, useEffect } from "react";
import styles from "./Events.module.css";
import data from "../../data.json";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export interface EventDetail {
  month: string;
  date: string;
  head: string;
  para: string;
  img: string;
}

export interface YearEvent {
  year: number;
  eventDetails: EventDetail[];
}

export interface EventsData {
  events: YearEvent[];
}

interface EventsProps {
  defaultYear?: number;
}

const Events: React.FC<EventsProps> = ({ defaultYear }) => {
  const [selectedYear, setSelectedYear] = useState<number>(
    defaultYear || Math.max(...data.events.map((event) => event.year)),
  );
  const [years, setYears] = useState<number[]>([]);
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const uniqueYears = [...new Set(data.events.map((event) => event.year))];
    setYears(uniqueYears.sort((a, b) => b - a));
  }, [data]);

  const selectedYearEvents =
    data.events.find((event) => event.year === selectedYear)?.eventDetails ||
    [];

  // Auto-slide hero events
  useEffect(() => {
    if (selectedYearEvents.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentHeroIndex((prev) => (prev + 1) % selectedYearEvents.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedYearEvents.length, selectedYear]);

  // Reset hero index when year changes
  useEffect(() => {
    setCurrentHeroIndex(0);
    setIsTransitioning(false);
  }, [selectedYear]);

  const currentHeroEvent =
    selectedYearEvents[currentHeroIndex] || selectedYearEvents[0];

  return (
    <div>
      <Navbar />
      <div className={styles.events}>
        <h2>Our Event Journey</h2>

        {/* Hero Section */}
        {selectedYearEvents.length > 0 && (
          <div className={styles.heroSection}>
            <div
              className={`${styles.heroCard} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
            >
              <div className={styles.heroContent}>
                <div className={styles.heroLeft}>
                  <div className={styles.heroDate}>
                    <span className={styles.heroMonth}>
                      {currentHeroEvent.month}
                    </span>
                    <span className={styles.heroDay}>
                      {currentHeroEvent.date}
                    </span>
                  </div>
                  <div className={styles.heroText}>
                    <h3 className={styles.heroTitle}>
                      {currentHeroEvent.head}
                    </h3>
                    <p className={styles.heroDescription}>
                      {currentHeroEvent.para}
                    </p>
                  </div>
                </div>
                <div className={styles.heroImageContainer}>
                  <img
                    src={currentHeroEvent.img}
                    alt={currentHeroEvent.head}
                    className={styles.heroImage}
                  />
                </div>
              </div>

              {/* Hero Navigation Dots */}
              {selectedYearEvents.length > 1 && (
                <div className={styles.heroDots}>
                  {selectedYearEvents.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.heroDot} ${
                        currentHeroIndex === index ? styles.heroDotActive : ""
                      }`}
                      onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentHeroIndex(index);
                          setIsTransitioning(false);
                        }, 300);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Year Selection Buttons */}
        <div className={styles.yearScroll}>
          <div className={styles.yearButtons}>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`${styles.yearButton} ${
                  selectedYear === year ? styles.active : ""
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className={styles.eventsGrid}>
          {selectedYearEvents.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <div className={styles.eventContent}>
                <div className={styles.eventText}>
                  <h4 className={styles.eventTitle}>{event.head}</h4>
                  <p className={styles.eventDescription}>{event.para}</p>
                </div>
                <div className={styles.eventDate}>
                  <span className={styles.eventMonth}>{event.month}</span>
                  <span className={styles.eventDay}>{event.date}</span>
                </div>
              </div>
              <img
                src={event.img}
                alt={event.head}
                className={styles.eventImage}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
