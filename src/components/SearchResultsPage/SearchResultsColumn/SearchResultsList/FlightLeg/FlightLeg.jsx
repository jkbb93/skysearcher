import FlightStop from "./FlightStop";
import FlightJourney from "./FlightJourney";
import getDayOverflow from "./getDayOverflow";
import styles from "./FlightLeg.module.css";

function FlightLeg({ flightData, type }) {
  const {
    origin: { airportIATA: originIATA },
    departureTime,
    duration,
    destination: { airportIATA: destinationIATA },
    arrivalTime,
  } = flightData;

  const dayOverflow = getDayOverflow(departureTime, arrivalTime);

  return (
    <div className={styles.leg}>
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
