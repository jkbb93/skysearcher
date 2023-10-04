import { useFlightSearchResults } from "../../features/flightSearch";
import SearchResultCard from "./SearchResultCard";
import styles from "./SearchResultsList.module.css";

function SearchResultsList() {
  const { data } = useFlightSearchResults();

  const handleSelectResult = (selectedResultData) => {
    console.log(selectedResultData);
  };

  const results = data.map((result) => (
    <li key={result.id}>
      <SearchResultCard data={result} onSelect={handleSelectResult} />
    </li>
  ));

  return <ul className={styles.list}>{results}</ul>;
}

export default SearchResultsList;
