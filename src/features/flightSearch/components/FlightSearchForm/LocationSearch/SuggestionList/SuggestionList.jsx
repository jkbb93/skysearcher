import {
  SuggestionListItem,
  SuggestionListItemSkeleton
} from "./SuggestionListItem";
import styles from "./SuggestionList.module.css";

function SuggestionList({
  query,
  suggestions,
  status,
  onSelectSuggestion: handleSelectSuggestion
}) {
  const hasSuggestions = Array.isArray(suggestions) && suggestions.length > 0;
  const maxListLength = 10;
  let content;

  if (hasSuggestions) {
    const slicedSuggestions = suggestions.slice(0, maxListLength - 1);

    content = (
      <ul className={styles.list}>
        {slicedSuggestions.map((suggestion) => (
          <SuggestionListItem
            key={suggestion.id}
            query={query}
            suggestion={suggestion}
            onSelect={handleSelectSuggestion}
          />
        ))}
      </ul>
    );
  }

  if (!hasSuggestions && status === "loading") {
    content = (
      <ul className={styles.list}>
        <SuggestionListItemSkeleton />
      </ul>
    );
  }

  if (status === "error") {
    content = (
      <div>
        <p>Failed to fetch locations.</p>
      </div>
    );
  }

  return content && <>{content}</>;
}

export default SuggestionList;
