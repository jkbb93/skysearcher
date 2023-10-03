import { SmallSearchControlButton } from "../../../SearchControl";
import { ReactComponent as LocationMarkerIcon } from "./location-dot-solid.svg";
import styles from "./LocationSearchModalToggler.module.css";

function LocationSearchModalToggler({
  value,
  placeholder,
  onToggle: handleToggle
}) {
  return (
    <SmallSearchControlButton
      icon={<LocationMarkerIcon />}
      value={value}
      placeholder={placeholder}
      onClick={handleToggle}
      className={styles.toggler}
    />
  );
}

export default LocationSearchModalToggler;
