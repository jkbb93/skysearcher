import DropdownMenu from "../../../../../../components/Shared/DropdownMenu";
import SuggestionList from "../SuggestionList";
import styles from "./SuggestionsMenu.module.css";

function SuggestionsMenu({
  query,
  suggestions,
  status,
  onSelectSuggestion: handleSelectSuggestion
}) {
  return (
    <DropdownMenu className={styles["dropdown-menu"]}>
      <SuggestionList
        query={query}
        suggestions={suggestions}
        status={status}
        onSelectSuggestion={handleSelectSuggestion}
      />
    </DropdownMenu>
  );
}

export default SuggestionsMenu;
