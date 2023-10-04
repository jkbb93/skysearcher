import { useContext } from "react";
import { FlightSearchResultsContext } from "../contexts";

function useFlightSearchResults() {
  const { data, isLoading, error, clearData } = useContext(FlightSearchResultsContext);
  return { data, isLoading, error, clearData };
}

export default useFlightSearchResults;
