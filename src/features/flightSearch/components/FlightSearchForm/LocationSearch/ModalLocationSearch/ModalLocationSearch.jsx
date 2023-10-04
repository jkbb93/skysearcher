import useLocationAutoSuggest from "../useLocationAutoSuggest";
import { MobileModal } from "../../../../../../components/Shared/Modal";
import LocationSearchModalToggler from "./LocationSearchModalToggler";
import LocationSearchModalContent from "./LocationSearchModalContent";

function ModalLocationSearch({
  togglerPlaceholder,
  modalHeading,
  isOpen,
  onToggle: onToggleCallback,
  query: passedQuery,
  onQueryChange: onQueryChangeCallback,
  selectedLocation,
  onSelectionChange: handleSelectionChange
}) {
  const {
    query,
    handleQueryChange,
    status,
    suggestions,
    selectedAirportIATA,
    handleSelectSuggestion
  } = useLocationAutoSuggest({
    query: passedQuery,
    onQueryChange: onQueryChangeCallback,
    selectedAirportIATA: selectedLocation,
    onSelectionChange: handleSelectionChange
  });

  return (
    <MobileModal
      renderToggler={(toggle) => (
        <LocationSearchModalToggler
          value={selectedAirportIATA && query}
          placeholder={togglerPlaceholder}
          onToggle={toggle}
        />
      )}
      renderModalContent={(toggle) => (
        <LocationSearchModalContent
          query={query}
          onQueryChange={handleQueryChange}
          status={status}
          suggestions={suggestions}
          onSelectSuggestion={handleSelectSuggestion}
          onClose={toggle}
        />
      )}
      heading={modalHeading}
      isOpen={isOpen}
      onToggle={onToggleCallback}
    />
  );
}

export default ModalLocationSearch;
