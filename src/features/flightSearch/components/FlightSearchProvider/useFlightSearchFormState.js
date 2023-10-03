import { useState, useCallback } from "react";

function useFlightSearchFormState() {
  const [values, setValues] = useState({
    originQuery: "",
    destinationQuery: "",
    originIATA: "",
    destinationIATA: "",
    departDate: "",
    returnDate: "",
    adultPassengers: 1,
    childPassengers: 0
  });

  const updateSearchValues = useCallback((newValues) => {
    setValues((prev) => ({
      ...prev,
      ...newValues
    }));
  }, []);

  return [values, updateSearchValues];
}

export default useFlightSearchFormState;
