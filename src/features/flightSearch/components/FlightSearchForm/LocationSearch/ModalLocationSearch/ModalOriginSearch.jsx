import useLocationAutoSuggest from "../useLocationAutoSuggest";
import { MobileModal } from "../../../../../../components/Shared/Modal";
import { ReactComponent as DepartureIcon } from "./plane-departure-solid.svg";
import { ReactComponent as AngleDownIcon } from "../../../../../../assets/icons/angle-down-solid.svg";
import LocationSearchModalContent from "./LocationSearchModalContent";

function ModalOriginSearch({
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
        <button
          style={{
            background: "hsla(0, 0%, 100%, 0.15)",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            fontSize: "1rem",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 12px",
            maxWidth: "100%",
            overflow: "hidden"
          }}
          type="button"
          onClick={toggle}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <DepartureIcon fill="#FFFFFF" width="18px" />
          </span>
          <span
            style={{
              display: "block",
              marginLeft: "12px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            }}
          >
            {query}
            {!query && "Depart From"}
          </span>
          <span
            style={{
              marginLeft: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <AngleDownIcon fill="#FFFFFF" width="18px" />
          </span>
        </button>
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
      heading="Depart From"
      isOpen={isOpen}
      onToggle={onToggleCallback}
    />
  );
}

export default ModalOriginSearch;
