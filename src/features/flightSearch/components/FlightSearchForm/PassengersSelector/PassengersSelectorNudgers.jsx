import { useId } from "react";
import Nudger from "../../../../../components/Shared/Nudger";
import styles from "./PassengersSelectorNudgers.module.css";

function PassengersSelectorNudgers({
  adultPassengers,
  childPassengers,
  onChangePassengers: handleChangePassengers
}) {
  const adultsNudgerId = useId();
  const childrenNudgerId = useId();
  const minAdults = 1;
  const minChildren = 0;
  const maxOfEachPassengerType = 8;

  const changeAdultPassengers = (newNumber) =>
    handleChangePassengers("adults", newNumber);

  const changeChildPassengers = (newNumber) =>
    handleChangePassengers("children", newNumber);

  return (
    <div className={styles.wrapper}>
      <div className={styles.nudger}>
        <label htmlFor={adultsNudgerId}>Adults</label>
        <Nudger
          id={adultsNudgerId}
          value={adultPassengers}
          onChange={changeAdultPassengers}
          min={minAdults}
          max={maxOfEachPassengerType}
        />
      </div>
      <div className={styles.nudger}>
        <label htmlFor={childrenNudgerId}>Children</label>
        <Nudger
          id={childrenNudgerId}
          value={childPassengers}
          onChange={changeChildPassengers}
          min={minChildren}
          max={maxOfEachPassengerType}
        />
      </div>
    </div>
  );
}

export default PassengersSelectorNudgers;
