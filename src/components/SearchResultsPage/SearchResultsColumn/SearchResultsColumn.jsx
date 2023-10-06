import SearchResultTabButtons from "./SearchResultTabButtons";
import SearchResultsList from "./SearchResultsList";
import styles from "./SearchResultsColumn.module.css";

function SearchResultsColumn({ results = [] }) {
  return (
    <div className={styles.column}>
      <span className={styles.summary}>{results.length} results</span>
      {/* <SearchResultTabButtons results={results} /> */}
      <SearchResultsList results={results} />
    </div>
  );
}

export default SearchResultsColumn;
