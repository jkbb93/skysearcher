import { useRef } from "react";
import { useFlightSearchForm } from "../../hooks";
import useMediaQuery, { breakpoints } from "../../../../hooks/useMediaQuery";
import SmallScreenInputs from "./SmallScreenInputs";
import LargeScreenInputs from "./LargeScreenInputs";

function FlightSearchForm() {
  const { values, updateSearchValues, submitSearch } = useFlightSearchForm();
  const inputsRef = useRef(null);
  const matches = useMediaQuery(breakpoints.md);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { originIATA, destinationIATA, departDate } = values;

    if (!originIATA) {
      inputsRef.current.promptOriginEntry();
      return;
    }

    // origin can't be same as destination... obviously
    if (!destinationIATA || originIATA === destinationIATA) {
      inputsRef.current.promptDestinationEntry();
      return;
    }

    // must have depart date, but can be one-way, so no check for return date
    if (!departDate) {
      inputsRef.current.promptDateEntry();
      return;
    }

    submitSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      {matches ? (
        <LargeScreenInputs
          ref={inputsRef}
          values={values}
          onInputChange={updateSearchValues}
        />
      ) : (
        <SmallScreenInputs
          ref={inputsRef}
          values={values}
          onInputChange={updateSearchValues}
        />
      )}
    </form>
  );
}

export default FlightSearchForm;
