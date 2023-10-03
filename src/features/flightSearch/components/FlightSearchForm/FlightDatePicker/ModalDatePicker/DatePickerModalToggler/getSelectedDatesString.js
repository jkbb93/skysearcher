const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function getSelectedDatesString({
  selectionHasStart,
  selectionHasEnd,
  selectionStartTimestamp,
  selectionEndTimestamp
}) {
  const startDate = selectionHasStart && new Date(selectionStartTimestamp);
  const endDate = selectionHasEnd && new Date(selectionEndTimestamp);
  if (!startDate) return "";

  const startMonthName = months[startDate.getMonth()];
  const startDayOfMonth = startDate.getDate();
  const endMonthName = endDate && months[endDate.getMonth()];
  const endDayOfMonth = endDate && endDate.getDate();

  if (!endDate) {
    return `${startDayOfMonth} ${startMonthName}`;
  }

  if (startMonthName === endMonthName) {
    return `${startDayOfMonth} - ${endDayOfMonth} ${startMonthName}`;
  }

  return `${startDayOfMonth} ${startMonthName} - ${endDayOfMonth} ${endMonthName}`;
}

export default getSelectedDatesString;
