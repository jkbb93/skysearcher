import DropdownMenu from "../../../../../../components/Shared/DropdownMenu";
import PassengersSelectorNudgers from "../PassengersSelectorNudgers";
import styles from "./PassengersSelectorDropdownMenu.module.css";

function PassengersSelectorDropdownMenu({
  adultPassengers,
  childPassengers,
  onChangePassengers: handleChangePassengers
}) {
  return (
    <DropdownMenu className={styles["dropdown-menu"]}>
      <PassengersSelectorNudgers
        adultPassengers={adultPassengers}
        childPassengers={childPassengers}
        onChangePassengers={handleChangePassengers}
      />
    </DropdownMenu>
  );
}

export default PassengersSelectorDropdownMenu;
