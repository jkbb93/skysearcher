import { forwardRef, useState, useImperativeHandle } from "react";
import { ModalFlightDatePicker } from "./FlightDatePicker";
import { ModalOriginSearch, ModalDestinationSearch } from "./LocationSearch";
import { ModalPassengersSelector } from "./PassengersSelector";
import Button from "../../../../components/Shared/Button";
import styles from "./SmallScreenInputs.module.css";

const SmallScreenInputs = forwardRef(function SmallScreenForm(
  { values, onInputChange: handleInputChange },
  forwardedRef
) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [originModalOpen, setOriginModalOpen] = useState(false);
  const [destinationModalOpen, setDestinationModalOpen] = useState(false);
  const [passengersSelectorOpen, setPassengersSelectorOpen] = useState(false);

  const toggleOriginModal = () => setOriginModalOpen((prev) => !prev);
  const toggleDestinationModal = () => setDestinationModalOpen((prev) => !prev);
  const toggleDatePicker = () => setDatePickerOpen((prev) => !prev);
  const togglePassengersSelector = () =>
    setPassengersSelectorOpen((prev) => !prev);

  useImperativeHandle(
    forwardedRef,
    () => {
      return {
        promptOriginEntry() {
          toggleOriginModal();
        },
        promptDestinationEntry() {
          toggleDestinationModal();
        },
        promptDateEntry() {
          toggleDatePicker();
        }
      };
    },
    []
  );

  return (
    <div className={styles.layout}>
      <div className={styles.slot}>
        <ModalOriginSearch
          query={values.originQuery}
          onQueryChange={(value) => handleInputChange({ originQuery: value })}
          selectedLocation={values.destinationIATA}
          onSelectionChange={(value) =>
            handleInputChange({ originIATA: value })
          }
          togglerPlaceholder="Fly From"
          modalHeading="Fly From"
          isOpen={originModalOpen}
          onToggle={toggleOriginModal}
        />
      </div>
      <div className={styles.slot}>
        <ModalDestinationSearch
          query={values.destinationQuery}
          onQueryChange={(value) =>
            handleInputChange({ destinationQuery: value })
          }
          selectedLocation={values.destinationIATA}
          onSelectionChange={(value) =>
            handleInputChange({ destinationIATA: value })
          }
          togglerPlaceholder="Choose Destination"
          modalHeading="Choose Destination"
          isOpen={destinationModalOpen}
          onToggle={toggleDestinationModal}
        />
      </div>
      <div className={styles["double-slot"]}>
        <ModalFlightDatePicker
          departDate={values.departDate}
          returnDate={values.returnDate}
          onDepartDateChange={(value) =>
            handleInputChange({ departDate: value })
          }
          onReturnDateChange={(value) =>
            handleInputChange({ returnDate: value })
          }
          isOpen={datePickerOpen}
          onToggle={setDatePickerOpen}
        />
        <ModalPassengersSelector
          adultPassengers={values.adultPassengers}
          childPassengers={values.childPassengers}
          onAdultPassengersChange={(value) =>
            handleInputChange({ adultPassengers: value })
          }
          onChildPassengersChange={(value) =>
            handleInputChange({ childPassengers: value })
          }
          isOpen={passengersSelectorOpen}
          onToggle={togglePassengersSelector}
        />
      </div>
      <Button type="submit" className={styles["submit-button"]}>
        Search
      </Button>
    </div>
  );
});

export default SmallScreenInputs;
