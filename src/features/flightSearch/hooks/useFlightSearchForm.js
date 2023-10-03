import { useContext } from "react";
import { FlightSearchFormContext } from "../contexts";

function useFlightSearch() {
  const { values, updateSearchValues, submitSearch } = useContext(
    FlightSearchFormContext
  );

  return { values, updateSearchValues, submitSearch };
}

export default useFlightSearch;
