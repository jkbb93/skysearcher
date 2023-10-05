import styles from "./FlightStop.module.css";

const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return hours + ":" + minutes;
  };

function FlightStop({
  time,
  dayOverflow = 0,
  airportIata,
  highlight,
  className,
}) {
  const formattedTime = formatTime(new Date(time));

  return (
    <div className={`${styles.stop} ${className}`}>
      <div className={styles["time-wrapper"]}>
        <span className={styles.time}>{formattedTime}</span>
        {dayOverflow > 0 && (
          <span className={styles["day-overflow"]}>+{dayOverflow}</span>
        )}
      </div>
      <span className={`${styles.iata} ${highlight ? styles.highlight : ""}`}>
        {airportIata}
      </span>
    </div>
  );
}

export default FlightStop;
