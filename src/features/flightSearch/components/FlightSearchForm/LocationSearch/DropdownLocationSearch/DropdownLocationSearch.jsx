import { forwardRef, useState } from "react";
import useLocationAutoSuggest from "../useLocationAutoSuggest";
import Dropdown from "../../../../../../components/Shared/Dropdown";
import { SearchControlInput } from "../../SearchControl";
import SuggestionsMenu from "./SuggestionsMenu";

const DropdownLocationSearch = forwardRef(function DropdownLocationSearch(
  {
    inputLabel = "Enter location",
    inputPlaceholder = "Country, city or airport",
    inputName = "location",
    minQueryLength = 1,
    groupPosition,
    query: passedQuery,
    onQueryChange: onQueryChangeCallback,
    selectedLocation,
    onSelectionChange: handleSelectionChange,
  },
  forwardedRef
) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {
    query,
    suggestions,
    selectedAirportIATA,
    status,
    handleQueryChange: handleQueryChangeCallback,
    handleClearQuery,
    handleSelectSuggestion: handleSelectSuggestionCallback,
  } = useLocationAutoSuggest({
    query: passedQuery,
    onQueryChange: onQueryChangeCallback,
    selectedAirportIATA: selectedLocation,
    onSelectionChange: handleSelectionChange,
  });

  const handleQueryChange = (event) => {
    if (!dropdownOpen) {
      setDropdownOpen(true);
    }

    handleQueryChangeCallback(event.target.value);
  };

  const openDropdown = () => {
    if (!dropdownOpen) setDropdownOpen(true);
  };

  const handleSelectSuggestion = (selectedSuggestion) => {
    handleSelectSuggestionCallback(selectedSuggestion);
    setDropdownOpen(false);
  };

  return (
    <Dropdown
      renderToggler={(setTogglerRef) => (
        <div
          ref={setTogglerRef}
          onPointerDown={openDropdown} // open dropdown when query input clicked
        >
          <SearchControlInput // Used to enter query
            ref={forwardedRef}
            label={inputLabel}
            placeholder={inputPlaceholder}
            value={query}
            onChange={handleQueryChange}
            onClear={handleClearQuery}
            groupPosition={groupPosition}
          />
          <input // Holds selected suggestion
            type="hidden"
            name={inputName}
            value={selectedAirportIATA}
          />
        </div>
      )}
      renderMenu={() =>
        query.length >= minQueryLength && (
          <SuggestionsMenu // Displays suggestions in dropdown
            query={query}
            suggestions={suggestions}
            status={status}
            onSelectSuggestion={handleSelectSuggestion}
          />
        )
      }
      alignment={"left"}
      gap={5}
      isOpen={dropdownOpen}
      onToggle={setDropdownOpen}
    />
  );
});

export default DropdownLocationSearch;
