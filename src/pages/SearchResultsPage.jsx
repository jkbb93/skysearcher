import { useFlightSearchResults } from "../features/flightSearch";
import { MainPageContentWrapper } from "../components/Layout";
import SearchResultsColumn from "../components/SearchResultsPage/SearchResultsColumn";

function SearchResultsPage({ onNavigateBack: handleNavigateBack }) {
  const { data } = useFlightSearchResults();

  return (
    <MainPageContentWrapper>
      <SearchResultsColumn results={data} />
    </MainPageContentWrapper>
  );
}

export default SearchResultsPage;
