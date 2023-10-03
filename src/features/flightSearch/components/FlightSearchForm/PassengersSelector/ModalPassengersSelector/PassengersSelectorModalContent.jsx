import PassengersSelectorNudgers from "../PassengersSelectorNudgers";
import Button from "../../../../../../components/Shared/Button";
import styles from "./PassengersSelectorModalContent.module.css";

function PassengersSelectorModalContent({
  adultPassengers,
  childPassengers,
  onChangePassengers: handleChangePassengers,
  onClose: handleClose
}) {
  return (
    <div className={styles.content}>
      <PassengersSelectorNudgers
        adultPassengers={adultPassengers}
        childPassengers={childPassengers}
        onChangePassengers={handleChangePassengers}
      />
      <Button onClick={handleClose} className={styles.button}>
        Confirm
      </Button>
    </div>
  );
}

export default PassengersSelectorModalContent;
