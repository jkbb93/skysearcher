import TextInput from "../../../../../../components/Shared/TextInput";
import SuggestionList from "../SuggestionList";
import styles from "./LocationSearchModalContent.module.css";

function LocationSearchModalContent({
  query,
  onQueryChange: handleQueryChange,
  suggestions,
  status,
  onSelectSuggestion: onSelectSuggestionCallback,
  onClose: handleClose
}) {
  const handleSelectSuggestion = (selectedSuggestion) => {
    onSelectSuggestionCallback(selectedSuggestion);
    handleClose();
  };

  return (
    <div className={styles.search}>
      <TextInput
        value={query}
        onChange={handleQueryChange}
        placeholder="Country, city or airport"
      />
      <SuggestionList
        query={query}
        suggestions={suggestions}
        status={status}
        onSelectSuggestion={handleSelectSuggestion}
      />
    </div>
  );
}

export default LocationSearchModalContent;
