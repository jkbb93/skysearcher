import { useState, useEffect } from "react";
import { useControlledState } from "../../../../../hooks";
import useLocationQuery from "./useLocationQuery";

function useLocationAutoSuggest({
  query: passedQuery,
  onQueryChange: onQueryChangeCallback,
  selectedAirportIATA: passedSelectedAirportIATA,
  onSelectionChange: onSelectionChangeCallback,
  minQueryLength = 1,
  debounce = 200,
}) {
  const [query, setQuery] = useState("");
  const [selectedAirportIATA, setSelectedAirportIATA] = useState("");

  const setSyncedQuery = useControlledState({
    internalState: query,
    setInternalState: setQuery,
    externalState: passedQuery,
    setExternalState: onQueryChangeCallback,
  });

  const setSyncedSelectedAirportIATA = useControlledState({
    internalState: selectedAirportIATA,
    setInternalState: setSelectedAirportIATA,
    externalState: passedSelectedAirportIATA,
    setExternalState: onSelectionChangeCallback,
  });

  const {
    data: suggestions,
    status,
    fetch: fetchSuggestions,
    clearData: clearSuggestions,
  } = useLocationQuery();

  const handleQueryChange = (newValue) => {
    setSyncedQuery(newValue);

    if (selectedAirportIATA) {
      setSyncedSelectedAirportIATA("");
    }
  };

  const handleClearQuery = () => {
    setSyncedQuery("");
    setSyncedSelectedAirportIATA("");
  };

  const handleSelectSuggestion = (selectedSuggestion) => {
    const { suggestionQueryString, airportIATA } = selectedSuggestion;
    setSyncedQuery(suggestionQueryString);
    setSyncedSelectedAirportIATA(airportIATA);
  };

  useEffect(() => {
    if (query.length < minQueryLength) {
      clearSuggestions();
      return;
    }

    const debounceTimer = setTimeout(() => {
      fetchSuggestions(query);
    }, debounce);

    return () => clearTimeout(debounceTimer);
  }, [query, minQueryLength, clearSuggestions, fetchSuggestions, debounce]);

  return {
    query,
    suggestions,
    selectedAirportIATA,
    status,
    handleQueryChange,
    handleClearQuery,
    handleSelectSuggestion,
  };
}

export default useLocationAutoSuggest;
