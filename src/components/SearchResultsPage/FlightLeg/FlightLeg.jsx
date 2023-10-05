import FlightJourney from "./FlightJourney";
import FlightStop from "./FlightStop";
import styles from "./FlightLeg.module.css";

const getDayOverflow = (departureTime, arrivalTime) => {
  const departureDate = new Date(departureTime);
  departureDate.setHours(0, 0, 0, 0);

  const arrivalDate = new Date(arrivalTime);
  arrivalDate.setHours(0, 0, 0, 0);

  const differenceInMs = arrivalDate - departureDate;

  // Convert ms to days (1 day = 24*60*60*1000 milliseconds)
  const differenceInDays = differenceInMs / (24 * 60 * 60 * 1000);

  // Rounding in case of precision errors
  return Math.round(differenceInDays);
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

  const dayOverflow = getDayOverflow(departureTime, arrivalTime);

  return (
    <div className={styles.leg}>
      <div className={styles.airline}>
        <span className={styles["detail-span"]}>{airline}</span>
      </div>
        <FlightStop
          time={departureTime}
          airportIata={originIATA}
          highlight={type === "outbound"}
          className={styles.stop}
        />
        <FlightJourney
          durationHours={duration.hours}
          durationMinutes={duration.minutes}
          flightType="Direct"
          className={styles.journey}
        />
        <FlightStop
          time={arrivalTime}
          dayOverflow={dayOverflow}
          airportIata={destinationIATA}
          highlight={type === "return"}
          className={styles.stop}
        />
    </div>
  );
}

export default FlightLeg;
