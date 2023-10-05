import { ReactComponent as PlaneIcon } from "../../../assets/icons/plane-solid.svg";
import styles from "./FlightJourney.module.css";

function FlightJourney({ durationHours = 0, durationMinutes = 0, flightType, className }) {
  const paddedHours = durationHours.toString().padStart(2, "0");
  const paddedMinutes = durationMinutes.toString().padStart(2, "0");

  return (
    <div className={`${styles.journey} ${className}`}>
      <span className={styles["detail-span"]}>
        {`${paddedHours}h ${paddedMinutes}`}
      </span>
      <div className={styles.graphic}>
        <div className={styles.line} />
        <PlaneIcon />
      </div>
      {flightType && <span className={styles["detail-span"]}>{flightType}</span>}
    </div>
  );
}

export default FlightJourney;
