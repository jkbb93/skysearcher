import { DatePicker } from "../DatePicker";
import Dropdown from "../../../../../../components/Shared/Dropdown";
import DatePickerButton from "./DatePickerButton";
import DropdownCalendarMenu from "./DropdownCalendarMenu";
import { getMinAndMaxDateStrings } from "../DatePicker/utils";

function DropdownDatePicker({
  departDate,
  returnDate,
  onDepartDateChange: onDepartDateChangeCallback,
  onReturnDateChange: onReturnDateChangeCallback,
  isOpen,
  onToggle: onToggleCallback
}) {
  const [minDateString, maxDateString] = getMinAndMaxDateStrings({
    startDate: new Date(),
    numberOfMonths: 12
  });

  return (
    <DatePicker
      startDate={departDate}
      endDate={returnDate}
      onStartDateChange={onDepartDateChangeCallback}
      onEndDateChange={onReturnDateChangeCallback}
      min={minDateString}
      max={maxDateString}
    >
      <Dropdown
        renderToggler={(setTogglerRef, toggle, isOpen) => (
          <DatePickerButton
            ref={setTogglerRef}
            onOpenDatePicker={!isOpen ? toggle : null}
            datePickerIsOpen={isOpen}
          />
        )}
        renderMenu={(toggle) => <DropdownCalendarMenu onClose={toggle} />}
        gap={5}
        isOpen={isOpen}
        onToggle={onToggleCallback}
      />
    </DatePicker>
  );
}

export default DropdownDatePicker;
