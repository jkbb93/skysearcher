import { useCallback, useMemo } from "react";
import useSelectionRange from "./useSelectionRange";
import { getTimestampForDateString, getDateStringForTimestamp } from "../utils";
import {
  DateSelectionDataContext,
  DateSelectionHandlersContext
} from "../contexts";

function DatePicker({
  children,
  startDate: passedStartDateString = "",
  endDate: passedEndDateString = "",
  min: passedMin,
  max: passedMax,
  onStartDateChange: onStartDateChangeCallback,
  onEndDateChange: onEndDateChangeCallback,
  startDateInputName = "start-date",
  endDateInputName = "end-date"
}) {
  const onStartDateChange = useCallback(
    (timestamp) => {
      if (typeof onStartDateChangeCallback === "function") {
        onStartDateChangeCallback(getDateStringForTimestamp(timestamp));
      }
    },
    [onStartDateChangeCallback]
  );

  const onEndDateChange = useCallback(
    (timestamp) => {
      if (typeof onEndDateChangeCallback === "function") {
        onEndDateChangeCallback(getDateStringForTimestamp(timestamp));
      }
    },
    [onEndDateChangeCallback]
  );

  const {
    selectionStart: selectionStartTimestamp,
    selectionEnd: selectionEndTimestamp,
    selectionMin: selectionMinTimestamp,
    selectionMax: selectionMaxTimestamp,
    selectionHasStart,
    selectionHasEnd,
    selectBoundsInSequence,
    setStart,
    setEnd,
    clearSelection
  } = useSelectionRange({
    start: getTimestampForDateString(passedStartDateString),
    end: getTimestampForDateString(passedEndDateString),
    min: getTimestampForDateString(passedMin),
    max: getTimestampForDateString(passedMax),
    onStartChange: onStartDateChange,
    onEndChange: onEndDateChange
  });

  const selectionData = useMemo(
    () => ({
      selectionStartTimestamp,
      selectionEndTimestamp,
      selectionMinTimestamp,
      selectionMaxTimestamp,
      selectionHasStart,
      selectionHasEnd
    }),
    [
      selectionStartTimestamp,
      selectionEndTimestamp,
      selectionMinTimestamp,
      selectionMaxTimestamp,
      selectionHasStart,
      selectionHasEnd
    ]
  );

  const selectionHandlers = useMemo(
    () => ({ selectBoundsInSequence, setStart, setEnd, clearSelection }),
    [selectBoundsInSequence, setStart, setEnd, clearSelection]
  );

  return (
    <div>
      <input
        name={startDateInputName}
        type="hidden"
        value={getDateStringForTimestamp(selectionStartTimestamp)}
      />
      <input
        name={endDateInputName}
        type="hidden"
        value={getDateStringForTimestamp(selectionEndTimestamp)}
      />
      <DateSelectionDataContext.Provider value={selectionData}>
        <DateSelectionHandlersContext.Provider value={selectionHandlers}>
          {children}
        </DateSelectionHandlersContext.Provider>
      </DateSelectionDataContext.Provider>
    </div>
  );
}

export default DatePicker;
