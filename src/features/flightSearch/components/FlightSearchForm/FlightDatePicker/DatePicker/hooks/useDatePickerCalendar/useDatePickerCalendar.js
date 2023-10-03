import useDateSelectionData from "../useDateSelectionData";
import useDateList from "./hooks/useDateList";
import {
  getCalendarStartFromSelectionData,
  appendSelectionInfoToDateObjects,
  createMonthObjects
} from "./utils";

function useDatePickerCalendar({
  startYear,
  startMonthIndex,
  numberOfMonths
} = {}) {
  const {
    selectionStartTimestamp,
    selectionEndTimestamp,
    selectionMinTimestamp,
    selectionMaxTimestamp,
    selectionHasStart,
    selectionHasEnd
  } = useDateSelectionData();

  const [
    startYearFromSelectionData,
    startMonthIndexFromSelectionData
  ] = getCalendarStartFromSelectionData({
    selectionHasStart,
    selectionHasEnd,
    selectionStartTimestamp,
    selectionEndTimestamp
  });

  const { dateObjects, incrementStartMonth, decrementStartMonth } = useDateList(
    {
      startYear: startYearFromSelectionData || startYear,
      startMonthIndex: startMonthIndexFromSelectionData || startMonthIndex,
      numberOfMonths
    }
  );

  const dateObjectsWithSelectionInfo = appendSelectionInfoToDateObjects({
    dateObjects,
    selectionStartTimestamp,
    selectionEndTimestamp,
    selectionMinTimestamp,
    selectionMaxTimestamp,
    selectionHasStart,
    selectionHasEnd
  });

  const monthObjects = createMonthObjects(dateObjectsWithSelectionInfo);

  return {
    monthObjects,
    incrementStartMonth,
    decrementStartMonth
  };
}

export default useDatePickerCalendar;
