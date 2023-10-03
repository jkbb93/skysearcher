import {
  useDateSelectionData,
  useDateSelectionHandlers,
  useDatePickerCalendar
} from "../DatePicker";
import {
  CalendarNavigation,
  CalendarGridHeader,
  CalendarGrid
} from "../Calendar";
import styles from "./TwoMonthView.module.css";

/* 
Check if selectionHasMin????? On the other hand, this component
is specialised for this app, so we know it's always using current date + 12 months
*/

function TwoMonthView() {
  const {
    selectionMinTimestamp,
    selectionMaxTimestamp
  } = useDateSelectionData();

  const {
    selectBoundsInSequence: handleDateSelection
  } = useDateSelectionHandlers();

  const currentDate = new Date();

  const {
    monthObjects,
    incrementStartMonth,
    decrementStartMonth
  } = useDatePickerCalendar({
    startYear: currentDate.getFullYear(),
    startMonthIndex: currentDate.getMonth(),
    numberOfMonths: 2
  });

  const [firstMonth, secondMonth] = monthObjects;

  const minDate = new Date(selectionMinTimestamp);
  const firstMonthIsMin =
    firstMonth.year === minDate.getFullYear() &&
    firstMonth.monthIndex === minDate.getMonth();

  const maxDate = new Date(selectionMaxTimestamp);
  const secondMonthIsMax =
    secondMonth.year === maxDate.getFullYear() &&
    secondMonth.monthIndex === maxDate.getMonth();

  const handlePrevButtonClick = () => {
    if (!firstMonthIsMin) {
      decrementStartMonth();
    }
  };

  const handleNextButtonClick = () => {
    if (!secondMonthIsMax) {
      incrementStartMonth();
    }
  };

  const twoMonthView = monthObjects.map((month, index) => {
    const isFirstMonth = index === 0;
    const isSecondMonth = index === 1;

    return (
      <div key={month.name + month.year}>
        <CalendarNavigation
          header={`${month.name} ${month.year}`}
          hasPrevButton={!isSecondMonth}
          hasNextButton={!isFirstMonth}
          disablePrevButton={isFirstMonth && firstMonthIsMin}
          disableNextButton={isSecondMonth && secondMonthIsMax}
          onPrevButtonClick={isFirstMonth ? handlePrevButtonClick : null}
          onNextButtonClick={isSecondMonth ? handleNextButtonClick : null}
        />
        <CalendarGridHeader />
        <CalendarGrid days={month.days} onDateSelection={handleDateSelection} />
      </div>
    );
  });

  return <div className={styles["two-month-view"]}>{twoMonthView}</div>;
}

export default TwoMonthView;
