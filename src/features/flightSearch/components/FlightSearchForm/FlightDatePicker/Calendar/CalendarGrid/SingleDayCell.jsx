import styles from "./SingleDayCell.module.css";

function SingleDayCell({
  dayOfMonth,
  selectionHasStart,
  selectionHasEnd,
  isSelectionStart,
  isSelectionEnd,
  isIntermediateSelection,
  isCurrentDate,
  isBelowMinDate,
  isAboveMaxDate,
  timestamp,
  onDateSelection: handleDateSelection
}) {
  const handleButtonClick = () => handleDateSelection(timestamp);

  const selectionHasStartAndEnd = selectionHasStart && selectionHasEnd;
  const isSelectionStartOrEnd = isSelectionStart || isSelectionEnd;
  const noDatesSelected = !selectionHasStart && !selectionHasEnd;
  const isDisabled = isBelowMinDate || isAboveMaxDate;

  const getCellFillClass = () => {
    if (isIntermediateSelection) {
      return styles["fill-whole"];
    }

    if (isSelectionStart && !isSelectionEnd && selectionHasStartAndEnd) {
      return styles["fill-right"];
    }

    if (isSelectionEnd && !isSelectionStart && selectionHasStartAndEnd) {
      return styles["fill-left"];
    }

    if (isCurrentDate && noDatesSelected && !isDisabled) {
      return styles["today-marker"];
    }
  };

  const getButtonFillClass = () => {
    if (isSelectionStartOrEnd) {
      return styles["button-fill"];
    }

    if (isCurrentDate && noDatesSelected && !isDisabled) {
      return styles["button-hollow"];
    }
  };

  const cellClassNames = `${styles.cell} ${getCellFillClass()}`;
  const buttonClassNames = `${styles.button} ${getButtonFillClass()}`;

  return (
    <div className={cellClassNames}>
      <button
        type="button"
        onClick={handleButtonClick}
        disabled={isDisabled}
        className={buttonClassNames}
      >
        {dayOfMonth}
      </button>
    </div>
  );
}

export default SingleDayCell;
