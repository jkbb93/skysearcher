function getCalendarStartFromSelectionData({
  selectionHasStart,
  selectionHasEnd,
  selectionStartTimestamp,
  selectionEndTimestamp
} = {}) {
  let selectionDate;

  if (selectionHasStart) {
    selectionDate = new Date(selectionStartTimestamp);
  }

  if (!selectionHasStart && selectionHasEnd) {
    selectionDate = new Date(selectionEndTimestamp);
  }

  const year = selectionDate && selectionDate.getFullYear();
  const monthIndex = selectionDate && selectionDate.getMonth();

  return [year, monthIndex];
}

export default getCalendarStartFromSelectionData;
