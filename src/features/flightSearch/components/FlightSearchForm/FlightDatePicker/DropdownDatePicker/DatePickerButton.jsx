import { forwardRef } from "react";
import { useDateSelectionData, useDateSelectionHandlers } from "../DatePicker";
import { SearchControlButton } from "../../SearchControl";
import styles from "./DatePickerButton.module.css";

const DatePickerButton = forwardRef(function DatePickerButton(
  { onOpenDatePicker: handleOpenDatePicker, datePickerIsOpen },
  forwardedRef
) {
  const {
    selectionHasStart,
    selectionHasEnd,
    selectionStartTimestamp,
    selectionEndTimestamp
  } = useDateSelectionData();

  const {
    clearSelection: handleClearDateSelection
  } = useDateSelectionHandlers();

  const startDate =
    selectionHasStart &&
    new Date(selectionStartTimestamp).toLocaleDateString("en-GB");

  const endDate =
    selectionHasEnd &&
    new Date(selectionEndTimestamp).toLocaleDateString("en-GB");

  const clearSelectionAndOpenDatePicker = (selectionToClear) => {
    handleClearDateSelection(selectionToClear);

    if (!datePickerIsOpen) {
      handleOpenDatePicker();
    }
  };

  const handleClearStartDate = () => clearSelectionAndOpenDatePicker("start");
  const handleClearEndDate = () => clearSelectionAndOpenDatePicker("end");

  return (
    <div ref={forwardedRef} className={styles.container}>
      <SearchControlButton
        value={startDate}
        label={"Depart"}
        placeholder={"Add date"}
        onClick={handleOpenDatePicker}
        onClear={handleClearStartDate}
        isActive={datePickerIsOpen && !selectionHasStart}
      />
      <SearchControlButton
        value={endDate}
        label={"Return"}
        placeholder={"Add date"}
        onClick={handleOpenDatePicker}
        onClear={handleClearEndDate}
        isActive={datePickerIsOpen && selectionHasStart && !selectionHasEnd}
      />
    </div>
  );
});

export default DatePickerButton;
