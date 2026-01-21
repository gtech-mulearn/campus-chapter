import React, { useEffect } from "react";
import styles from "./Events.module.css";
import data from "../../../../data.json";

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

const Events: React.FC<EventsProps> = ({ defaultYear = 2025 }) => {
  const selectedYearEvents =
    data.events.find((event) => event.year === defaultYear)?.eventDetails || [];

  useEffect(() => {
    // Check if the URL contains #events hash
    if (window.location.hash === '#events') {
      // Get the events element
      const eventsElement = document.getElementById('events');
      if (eventsElement) {
        // Scroll to the element with smooth behavior
        eventsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  const handleRegistrationClick = () => {
    window.open("https://tinyurl.com/karmayottam", "_blank");
  };

  return (
    <div className={styles.events} id="events">
      <h2>Our Event Journey</h2>
      <div className={styles.innerDiv}>
        {selectedYearEvents.length > 0 && (
          <>
            <div className={`${styles.card} ${styles.large}`}>
              <div className={styles.content}>
                <div className={styles.date}>
                  <span>{selectedYearEvents[0].month}</span>
                  <span>{selectedYearEvents[0].date}</span>
                </div>
                <div className={styles.text}>
                  <strong>{selectedYearEvents[0].head}</strong>
                  <span>{selectedYearEvents[0].para}</span>
                  <button 
                    className={styles.registerButton}
                    onClick={handleRegistrationClick}
                  >
                    Register Now
                  </button>
                </div>
              </div>
              <img
                src={selectedYearEvents[0].img}
                alt={selectedYearEvents[0].head + " - Poster"}
              />
            </div>

            <div className={`${styles.card} ${styles.large}`}>
              <div className={styles.content}>
                <div className={styles.date}>
                  <span>{selectedYearEvents[1].month}</span>
                  <span>{selectedYearEvents[1].date}</span>
                </div>
                <div className={styles.text}>
                  <strong>{selectedYearEvents[1].head}</strong>
                  <span>{selectedYearEvents[1].para}</span>
                </div>
              </div>
              <img
                src={selectedYearEvents[1].img}
                alt={selectedYearEvents[1].head + " - Poster"}
              />
            </div>
          </>
        )}
        <a className={styles.viewAllButton} href="/events">
          View All ➤
        </a>
      </div>
    </div>
  );
};

export default Events;
