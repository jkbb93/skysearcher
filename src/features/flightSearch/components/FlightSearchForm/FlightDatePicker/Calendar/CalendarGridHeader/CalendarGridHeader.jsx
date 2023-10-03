import styles from "./CalendarGridHeader.module.css";

function CalendarGridHeader({ labelType = "letter", className }) {
  const weekdays = [
    { name: "Monday", short: "Mon", letter: "M" },
    { name: "Tuesday", short: "Tue", letter: "T" },
    { name: "Wednesday", short: "Wed", letter: "W" },
    { name: "Thursday", short: "Thu", letter: "T" },
    { name: "Friday", short: "Fri", letter: "F" },
    { name: "Saturday", short: "Sat", letter: "S" },
    { name: "Sunday", short: "Sun", letter: "S" }
  ];

  return (
    <div className={`${styles.header} ${className}`}>
      {weekdays.map((weekday) => (
        <span key={weekday.name}>{weekday[labelType]}</span>
      ))}
    </div>
  );
}

export default CalendarGridHeader;
