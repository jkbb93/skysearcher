import { useDateSelectionData } from "../../DatePicker";
import getSelectedDatesString from "./getSelectedDatesString";
import { SmallSearchControlButton } from "../../../SearchControl";
import { ReactComponent as CalendarIcon } from "./calendar-days-solid.svg";
import styles from "./DatePickerModalToggler.module.css";

function DatePickerModalToggler({ onToggle: handleToggle }) {
  const {
    selectionHasStart,
    selectionHasEnd,
    selectionStartTimestamp,
    selectionEndTimestamp
  } = useDateSelectionData();

  return (
    <SmallSearchControlButton
      icon={<CalendarIcon />}
      value={getSelectedDatesString({
        selectionHasStart,
        selectionHasEnd,
        selectionStartTimestamp,
        selectionEndTimestamp
      })}
      placeholder="Choose dates"
      onClick={handleToggle}
      className={styles.toggler}
    />
  );
}

export default DatePickerModalToggler;
