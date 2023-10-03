import { useState, useCallback } from "react";
import { useControlledState } from "../../../../../components/Shared/hooks";

function usePassengersSelector({
  adultPassengers: passedAdultPassengers,
  onAdultPassengersChange: onAdultPassengersChangeCallback,
  childPassengers: passedChildPassengers,
  onChildPassengersChange: onChildPassengersChangeCallback
}) {
  const [adultPassengers, setAdultPassengers] = useState(1);
  const [childPassengers, setChildPassengers] = useState(0);

  const setSyncedAdultPassengers = useControlledState({
    internalState: adultPassengers,
    setInternalState: setAdultPassengers,
    externalState: passedAdultPassengers,
    setExternalState: onAdultPassengersChangeCallback
  });

  const setSyncedChildPassengers = useControlledState({
    internalState: childPassengers,
    setInternalState: setChildPassengers,
    externalState: passedChildPassengers,
    setExternalState: onChildPassengersChangeCallback
  });

  const handleChangePassengers = useCallback(
    (type, newNumber) => {
      if (type === "adults") {
        setSyncedAdultPassengers(newNumber);
      }

      if (type === "children") {
        setSyncedChildPassengers(newNumber);
      }
    },
    [setSyncedAdultPassengers, setSyncedChildPassengers]
  );

  return {
    adultPassengers,
    childPassengers,
    handleChangePassengers
  };
}

export default usePassengersSelector;
