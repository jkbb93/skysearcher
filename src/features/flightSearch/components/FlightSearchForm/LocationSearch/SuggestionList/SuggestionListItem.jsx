import { ReactComponent as PlaneIcon } from "../../../../../../assets/icons/plane-solid.svg";
import HighlightedSpan from "../../../../../../components/Shared/HighlightedSpan";
import styles from "./SuggestionListItem.module.css";

function SuggestionListItem({ query, suggestion, onSelect: handleSelect }) {
  const { city, airport, airportIATA, country } = suggestion;

  const airportString = `${airport} (${airportIATA})`;
  const cityCountryString = `${city}, ${country}`;

  const handleClick = () => {
    handleSelect({
      suggestionQueryString: airportString,
      airportIATA
    });
  };

  return (
    <li onClick={handleClick} className={styles["list-item"]}>
      <div className={styles["icon-container"]}>
        <PlaneIcon />
      </div>
      <div className={styles.copy}>
        <HighlightedSpan
          string={airportString}
          query={query}
          highlightClassName={styles.highlight}
        />
        <HighlightedSpan
          string={cityCountryString}
          query={query}
          stringClassName={styles.detail}
          highlightClassName={styles.highlight}
        />
      </div>
    </li>
  );
}

function SuggestionListItemSkeleton() {
  return (
    <li className={styles["list-item"]}>
      <div className={styles["icon-container"]}>
        <div className={styles.placeholder}></div>
      </div>
      <div className={styles.copy}>
        <div className={styles.placeholder}></div>
        <div className={styles.placeholder}></div>
      </div>
    </li>
  );
}

export { SuggestionListItem, SuggestionListItemSkeleton };
