import SearchResultCard from "./SearchResultCard";
import styles from "./SearchResultsList.module.css";

function SearchResultsList({ results }) {
  const handleSelectResult = (selectedResultData) => {
    console.log(selectedResultData);
  };

  const listItems = results.map((result) => (
    <li key={result.id}>
      <SearchResultCard data={result} onSelect={handleSelectResult} />
    </li>
  ));

  return <ul className={styles.list}>{listItems}</ul>;
}

export default SearchResultsList;
