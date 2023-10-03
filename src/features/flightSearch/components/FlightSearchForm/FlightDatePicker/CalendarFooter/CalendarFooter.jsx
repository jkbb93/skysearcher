import { useDateSelectionData } from "../DatePicker";
import DateSelectionPrompt from "./DateSelectionPrompt";
import Button from "../../../../../../components/Shared/Button";
import styles from "./CalendarFooter.module.css";

function CalendarFooter({ onConfirm: handleConfirm, className }) {
  const { selectionHasStart, selectionHasEnd } = useDateSelectionData();

  return (
    <div className={`${styles.footer} ${className}`}>
      <DateSelectionPrompt
        selectionHasStart={selectionHasStart}
        selectionHasEnd={selectionHasEnd}
        className={styles.prompt}
      />
      <Button onClick={handleConfirm} disabled={!selectionHasStart}>
        Confirm
      </Button>
    </div>
  );
}

export default CalendarFooter;
