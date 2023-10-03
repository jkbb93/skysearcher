import usePassengersSelector from "../usePassengersSelector";
import Dropdown from "../../../../../../components/Shared/Dropdown";
import { SearchControlButton } from "../../SearchControl";
import PassengersSelectorDropdownMenu from "./PassengersSelectorDropdownMenu";
import getDisplayedPassengers from "../getDisplayedPassengers";

function DropdownPassengersSelector({
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
    <Dropdown
      renderToggler={(setTogglerRef, toggle, isOpen) => (
        <div ref={setTogglerRef}>
          <SearchControlButton
            label="Passengers"
            value={displayedValue}
            onClick={toggle}
            isActive={isOpen}
            disableClearButton={true}
            groupPosition="end"
          />
          <input
            type="hidden"
            name="adult-passengers"
            value={adultPassengers}
          />
          <input
            type="hidden"
            name="child-passengers"
            value={childPassengers}
          />
        </div>
      )}
      renderMenu={() => (
        <PassengersSelectorDropdownMenu
          adultPassengers={adultPassengers}
          childPassengers={childPassengers}
          onChangePassengers={handleChangePassengers}
        />
      )}
      gap={5}
    />
  );
}

export default DropdownPassengersSelector;
