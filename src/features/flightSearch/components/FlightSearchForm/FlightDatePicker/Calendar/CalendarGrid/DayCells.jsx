import SingleDayCell from "./SingleDayCell";

function DayCells({ days, onDateSelection: handleDateSelection }) {
  const dayComponents = days.map((day) => {
    const {
      timestamp,
      dayOfMonth,
      selectionHasStart,
      selectionHasEnd,
      isSelectionStart,
      isSelectionEnd,
      isIntermediateSelection,
      isCurrentDate,
      isBelowMinDate,
      isAboveMaxDate
    } = day;

    return (
      <SingleDayCell
        key={timestamp}
        dayOfMonth={dayOfMonth}
        selectionHasStart={selectionHasStart}
        selectionHasEnd={selectionHasEnd}
        isSelectionStart={isSelectionStart}
        isSelectionEnd={isSelectionEnd}
        isIntermediateSelection={isIntermediateSelection}
        isCurrentDate={isCurrentDate}
        isBelowMinDate={isBelowMinDate}
        isAboveMaxDate={isAboveMaxDate}
        timestamp={timestamp}
        onDateSelection={handleDateSelection}
      />
    );
  });

  return <>{dayComponents}</>;
}

export default DayCells;
