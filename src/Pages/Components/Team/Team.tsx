import styles from "./Team.module.css";
import data from "../../../../data.json";

const Team = () => {
  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <div className={styles.teamBodyWrapper}>
        {/* Remove or comment out the line-related section */}
        {/* <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                </div> */}
        <div className={styles.teamMembersDetailsWrapper}>
          {Object.entries(data.team).map(([key, member], index) => (
            <div key={index} className={styles.team}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>{member.name}</div>
                <div className={styles.teamMemberDesignation}>
                  {key.includes("null")
                    ? "Team Member"
                    : key.replace(/([A-Z,1-9])/g, " $1").trim()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
