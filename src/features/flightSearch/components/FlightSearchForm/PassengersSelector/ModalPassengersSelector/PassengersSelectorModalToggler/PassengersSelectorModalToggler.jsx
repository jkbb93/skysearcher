import { SmallSearchControlButton } from "../../../SearchControl";
import { ReactComponent as UserIcon } from "./user-solid.svg";
import styles from "./PassengersSelectorModalToggler.module.css";

function PassengersSelectorModalToggler({ value, onToggle: handleToggle }) {
  return (
    <SmallSearchControlButton
      icon={<UserIcon />}
      value={value}
      placeholder="Select passengers"
      onClick={handleToggle}
      className={styles.toggler}
    />
  );
}

export default PassengersSelectorModalToggler;
