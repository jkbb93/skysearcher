import { DatePicker } from "../DatePicker";
import { MobileModal } from "../../../../../../components/Shared/Modal";
import DatePickerModalToggler from "./DatePickerModalToggler";
import ModalCalendar from "./ModalCalendar";
import { getMinAndMaxDateStrings } from "../DatePicker/utils";

function ModalDatePicker({
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
      <MobileModal
        renderToggler={(toggle) => <DatePickerModalToggler onToggle={toggle} />}
        renderModalContent={(toggle) => <ModalCalendar onClose={toggle} />}
        heading="Choose Dates"
        isOpen={isOpen}
        onToggle={onToggleCallback}
      />
    </DatePicker>
  );
}

export default ModalDatePicker;
