import DayCells from "./DayCells";
import styles from "./CalendarGrid.module.css";

function EmptyCellsFiller({ numberOfCells, highlight }) {
  if (numberOfCells === 0) return null;

  const backgroundColor = highlight ? "#b8e3ff" : "";

  return (
    <div
      style={{
        gridColumn: `span ${numberOfCells}`,
        backgroundColor
      }}
    ></div>
  );
}

function CalendarGrid({ days, onDateSelection: handleDateSelection }) {
  const firstDay = days[0];
  const lastDay = days[days.length - 1];
  const { selectionHasStart, selectionHasEnd } = firstDay;

  /*
    Grid columns are numbered 1 - 7, and represent Mon - Sun
    dayOfWeekIndex 0 represents Sunday, so swap 0 for 7 to get Sunday grid column
  */
  const firstDayGridColumn = firstDay.dayOfWeekIndex || 7;
  const emptyGridCellsAtStart = firstDayGridColumn - 1;
  const lastDayGridColumn = lastDay.dayOfWeekIndex || 7;
  const emptyGridCellsAtEnd = 7 - lastDayGridColumn;

  const selectionStartsBeforeFirstDay =
    firstDay.isIntermediateSelection ||
    (firstDay.isSelectionEnd &&
      selectionHasStart &&
      !firstDay.isSelectionStart);

  const selectionEndsAfterLastDay =
    lastDay.isIntermediateSelection ||
    (lastDay.isSelectionStart && selectionHasEnd && !lastDay.isSelectionEnd);

  return (
    <div className={styles.grid}>
      <EmptyCellsFiller
        numberOfCells={emptyGridCellsAtStart}
        highlight={selectionStartsBeforeFirstDay}
      />
      <DayCells days={days} onDateSelection={handleDateSelection} />
      <EmptyCellsFiller
        numberOfCells={emptyGridCellsAtEnd}
        highlight={selectionEndsAfterLastDay}
      />
    </div>
  );
}

export default CalendarGrid;
