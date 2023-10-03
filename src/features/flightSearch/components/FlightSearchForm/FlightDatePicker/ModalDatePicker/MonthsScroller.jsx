import { useDateSelectionHandlers, useDatePickerCalendar } from "../DatePicker";
import Scroller from "../../../../../../components/Shared/Scroller";
import { CalendarGrid } from "../Calendar";
import styles from "./MonthsScroller.module.css";

function MonthsScroller() {
  const {
    selectBoundsInSequence: handleDateSelection
  } = useDateSelectionHandlers();

  const currentDate = new Date();

  const { monthObjects } = useDatePickerCalendar({
    startYear: currentDate.getFullYear(),
    startMonthIndex: currentDate.getMonth(),
    numberOfMonths: 13
  });

  const monthList = (
    <div className={styles["month-list"]}>
      {monthObjects.map((month) => (
        <div key={month.name + month.year}>
          <h2 className={styles["month-heading"]}>
            {`${month.name} ${month.year}`}
          </h2>
          <CalendarGrid
            days={month.days}
            onDateSelection={handleDateSelection}
          />
        </div>
      ))}
    </div>
  );

  return <Scroller>{monthList}</Scroller>;
}

export default MonthsScroller;
