import { ReactComponent as PlaneIcon } from "../../assets/icons/plane-solid.svg";
import styles from "./FlightLeg.module.css";

const padNumber = (number) => {
  return number.toString().padStart(2, "0");
};

const formatTime = (date) => {
  const hours = padNumber(date.getHours());
  const minutes = padNumber(date.getMinutes());

  return hours + ":" + minutes;
};

const getDayOverflow = (departureTime, arrivalTime) => {
  const departureDate = new Date(departureTime);
  departureDate.setHours(0, 0, 0, 0);

  const arrivalDate = new Date(arrivalTime);
  arrivalDate.setHours(0, 0, 0, 0);

  const differenceInMs = arrivalDate - departureDate;

  // Convert ms to days (1 day = 24*60*60*1000 milliseconds)
  const differenceInDays = differenceInMs / (24 * 60 * 60 * 1000);

  return +differenceInDays;
};

function FlightLeg({ flightData, type }) {
  const {
    airline,
    origin: { airportIATA: originIATA },
    departureTime,
    duration,
    destination: { airportIATA: destinationIATA },
    arrivalTime,
  } = flightData;

  const formattedDepartureTime = formatTime(new Date(departureTime));
  const formattedArrivalTime = formatTime(new Date(arrivalTime));
  const formattedDurationHours = padNumber(duration.hours);
  const formattedDurationMinutes = padNumber(duration.minutes);

  const dayOverflow = getDayOverflow(departureTime, arrivalTime);

  const iataHighlightClass = (iataType) =>
    type === iataType ? styles.highlight : "";

  return (
    <div className={styles.leg}>
      <div className={styles.airline}>
        <span className={styles["detail-span"]}>{airline}</span>
      </div>
      <div className={styles.origin}>
        <span className={styles["takeoff-time"]}>{formattedDepartureTime}</span>
        <span
          className={`${styles["detail-span"]} ${
            styles.iata
          } ${iataHighlightClass("outbound")}`}
        >
          {originIATA}
        </span>
      </div>
      <div className={styles.journey}>
        <span
          className={styles["detail-span"]}
        >{`${formattedDurationHours}h ${formattedDurationMinutes}`}</span>
        <div className={styles["journey-graphic"]}>
          <div className={styles.line} />
          <PlaneIcon />
        </div>
        <span className={styles["detail-span"]}>Direct</span>
      </div>
      <div className={styles.destination}>
        <div className={styles["day-overflow-wrapper"]}>
          <span className={styles["takeoff-time"]}>{formattedArrivalTime}</span>
          {dayOverflow > 0 && (
            <span className={`${styles["detail-span"]} ${styles["day-overflow"]}`}>+{dayOverflow}</span>
          )}
        </div>
        <span
          className={`${styles["detail-span"]} ${
            styles.iata
          } ${iataHighlightClass("return")}`}
        >
          {destinationIATA}
        </span>
      </div>
    </div>
  );
}

export default FlightLeg;
