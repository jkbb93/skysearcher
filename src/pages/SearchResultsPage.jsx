import { useFlightSearchResults } from "../features/flightSearch";
import { MainPageContentWrapper } from "../components/Layout";
import ResultsSummary from "../components/SearchResultsPage/ResultsSummary";
import SearchResultsList from "../components/SearchResultsPage/SearchResultsList";
import TextButton from "../components/Shared/TextButton";

function SearchResultsPage({ onNavigateBack: handleNavigateBack }) {
  const { data } = useFlightSearchResults();

  return (
    <MainPageContentWrapper>
      <div style={{padding: "16px 16px 24px", maxWidth: "700px", width: "100%"}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <ResultsSummary numberOfResults={data.length} />
          <TextButton onClick={handleNavigateBack}>Back</TextButton>
        </div>
        <SearchResultsList results={data} />
      </div>
    </MainPageContentWrapper>
  );
}

export default SearchResultsPage;
