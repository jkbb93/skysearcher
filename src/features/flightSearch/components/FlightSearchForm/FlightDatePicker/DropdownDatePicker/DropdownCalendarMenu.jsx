import DropdownMenu from "../../../../../../components/Shared/DropdownMenu";
import TwoMonthView from "./TwoMonthView";
import CalendarFooter from "../CalendarFooter";
import styles from "./DropdownCalendarMenu.module.css";

function DropdownCalendarMenu({ onClose: handleClose }) {
  return (
    <DropdownMenu className={styles["dropdown-menu"]}>
      <TwoMonthView />
      <CalendarFooter onConfirm={handleClose} className={styles.footer} />
    </DropdownMenu>
  );
}

export default DropdownCalendarMenu;
