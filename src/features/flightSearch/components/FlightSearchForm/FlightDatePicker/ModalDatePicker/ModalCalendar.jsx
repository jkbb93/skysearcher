import { CalendarGridHeader } from "../Calendar";
import MonthsScroller from "./MonthsScroller";
import CalendarFooter from "../CalendarFooter";
import styles from "./ModalCalendar.module.css";

function ModalCalendar({ onClose: handleClose }) {
  return (
    <>
      <div className={styles["date-picker-button-wrapper"]}></div>
      <CalendarGridHeader className={styles["scroller-header"]} />
      <MonthsScroller />
      <CalendarFooter onConfirm={handleClose} className={styles.footer} />
    </>
  );
}

export default ModalCalendar;
