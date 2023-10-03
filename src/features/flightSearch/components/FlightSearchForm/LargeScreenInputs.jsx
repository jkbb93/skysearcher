import { forwardRef, useState, useRef, useImperativeHandle } from "react";
import { DropdownLocationSearch } from "./LocationSearch";
import { DropdownFlightDatePicker } from "./FlightDatePicker";
import { DropdownPassengersSelector } from "./PassengersSelector";
import Button from "../../../../components/Shared/Button";
import styles from "./LargeScreenInputs.module.css";

const LargeScreenInputs = forwardRef(function LargeScreenInputs(
  { values, onInputChange: handleInputChange },
  forwardedRef
) {
  const originInputRef = useRef(null);
  const destinationInputRef = useRef(null);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  useImperativeHandle(forwardedRef, () => {
    return {
      promptOriginEntry() {
        originInputRef.current.focus();
      },
      promptDestinationEntry() {
        destinationInputRef.current.focus();
      },
      promptDateEntry() {
        setDatePickerOpen(true);
      }
    };
  });

  return (
    <div className={styles.row}>
      <div className={styles.slot}>
        <DropdownLocationSearch
          ref={originInputRef}
          inputLabel="From"
          inputPlaceholder="Country, city or airport"
          inputName={"origin-IATA"}
          groupPosition={"start"}
          query={values.originQuery}
          onQueryChange={(value) => handleInputChange({ originQuery: value })}
          selectedLocation={values.originIATA}
          onSelectionChange={(value) =>
            handleInputChange({ originIATA: value })
          }
        />
      </div>
      <div className={styles.slot}>
        <DropdownLocationSearch
          ref={destinationInputRef}
          inputLabel="To"
          inputPlaceholder="Country, city or airport"
          inputName={"destination-IATA"}
          query={values.destinationQuery}
          onQueryChange={(value) =>
            handleInputChange({ destinationQuery: value })
          }
          selectedLocation={values.destinationIATA}
          onSelectionChange={(value) =>
            handleInputChange({ destinationIATA: value })
          }
        />
      </div>
      <div className={styles["double-slot"]}>
        <DropdownFlightDatePicker
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
      </div>
      <div className={styles.slot}>
        <DropdownPassengersSelector
          adultPassengers={values.adultPassengers}
          childPassengers={values.childPassengers}
          onAdultPassengersChange={(value) =>
            handleInputChange({ adultPassengers: value })
          }
          onChildPassengersChange={(value) =>
            handleInputChange({ childPassengers: value })
          }
        />
      </div>
      <Button type="submit">Search</Button>
    </div>
  );
});

export default LargeScreenInputs;
