import { useContext } from "react";
import { FlightSearchResultsContext } from "../contexts";

function useFlightSearchResults() {
  const { data, isLoading, error } = useContext(FlightSearchResultsContext);
  return { data, isLoading, error };
}

export default useFlightSearchResults;
