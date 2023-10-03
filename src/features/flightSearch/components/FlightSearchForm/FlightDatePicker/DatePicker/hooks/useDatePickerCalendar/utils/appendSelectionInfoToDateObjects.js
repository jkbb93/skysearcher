function appendSelectionInfoToDateObjects({
  dateObjects,
  selectionStartTimestamp,
  selectionEndTimestamp,
  selectionMinTimestamp,
  selectionMaxTimestamp,
  selectionHasStart,
  selectionHasEnd
} = {}) {
  const selectionHasMinimum = selectionMinTimestamp !== null;
  const selectionHasMaximum = selectionMaxTimestamp !== null;

  const dateObjectsWithSelectionInfo = dateObjects.map((date) => {
    const { timestamp } = date;

    const isSelectionStart = timestamp === selectionStartTimestamp;
    const isSelectionEnd = timestamp === selectionEndTimestamp;
    const isIntermediateSelection =
      selectionHasStart &&
      selectionHasEnd &&
      timestamp > selectionStartTimestamp &&
      timestamp < selectionEndTimestamp;

    const isMinDate =
      selectionHasMinimum && timestamp === selectionMinTimestamp;

    const isMaxDate =
      selectionHasMaximum && timestamp === selectionMaxTimestamp;

    const isBelowMinDate =
      selectionHasMinimum && timestamp < selectionMinTimestamp;

    const isAboveMaxDate =
      selectionHasMaximum && timestamp > selectionMaxTimestamp;

    return {
      ...date,
      selectionHasStart,
      selectionHasEnd,
      isSelectionStart,
      isSelectionEnd,
      isIntermediateSelection,
      isMinDate,
      isMaxDate,
      isBelowMinDate,
      isAboveMaxDate
    };
  });

  return dateObjectsWithSelectionInfo;
}

export default appendSelectionInfoToDateObjects;
