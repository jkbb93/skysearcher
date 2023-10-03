import usePassengersSelector from "../usePassengersSelector";
import { MobileModal } from "../../../../../../components/Shared/Modal";
import PassengersSelectorModalToggler from "./PassengersSelectorModalToggler";
import PassengersSelectorModalContent from "./PassengersSelectorModalContent";
import getDisplayedPassengers from "../getDisplayedPassengers";

function ModalPassengerSelector({
  adultPassengers: passedAdultPassengers,
  onAdultPassengersChange: onAdultPassengersChangeCallback,
  childPassengers: passedChildPassengers,
  onChildPassengersChange: onChildPassengersChangeCallback
}) {
  const {
    adultPassengers,
    childPassengers,
    handleChangePassengers
  } = usePassengersSelector({
    adultPassengers: passedAdultPassengers,
    onAdultPassengersChange: onAdultPassengersChangeCallback,
    childPassengers: passedChildPassengers,
    onChildPassengersChange: onChildPassengersChangeCallback
  });

  const displayedValue = getDisplayedPassengers(
    adultPassengers,
    childPassengers
  );

  return (
    <MobileModal
      renderToggler={(toggle) => (
        <PassengersSelectorModalToggler
          value={displayedValue}
          onToggle={toggle}
        />
      )}
      renderModalContent={(toggle) => (
        <PassengersSelectorModalContent
          adultPassengers={adultPassengers}
          childPassengers={childPassengers}
          onChangePassengers={handleChangePassengers}
          onClose={toggle}
        />
      )}
      heading="Select passengers"
    />
  );
}

export default ModalPassengerSelector;
