import { useCallback, useMemo } from "react";
import useFlightSearchFormState from "./useFlightSearchFormState";
import { useAPIGetRequest, endpoints } from "../../../../api";
import assembleFlightSearchQuery from "./assembleFlightSearchQuery";
import {
  FlightSearchFormContext,
  FlightSearchResultsContext
} from "../../contexts";

function FlightSearchProvider({ children }) {
  const [values, updateSearchValues] = useFlightSearchFormState();
  const { data, isLoading, error, getRequest } = useAPIGetRequest();

  const submitSearch = useCallback(() => {
    const { flightSearch: baseURL } = endpoints;
    const query = assembleFlightSearchQuery(values);

    getRequest(baseURL + query);
  }, [values, getRequest]);

  const searchFormContextValue = useMemo(
    () => ({
      values,
      updateSearchValues,
      submitSearch
    }),
    [values, updateSearchValues, submitSearch]
  );

  const searchResultsContextValue = useMemo(
    () => ({
      data,
      isLoading,
      error
    }),
    [data, isLoading, error]
  );

  return (
    <FlightSearchFormContext.Provider value={searchFormContextValue}>
      <FlightSearchResultsContext.Provider value={searchResultsContextValue}>
        {children}
      </FlightSearchResultsContext.Provider>
    </FlightSearchFormContext.Provider>
  );
}

export default FlightSearchProvider;
