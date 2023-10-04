import { MainPageContentWrapper } from "../components/Layout";
import SearchResultsList from "../components/SearchResultsPage/SearchResultsList";
import TextButton from "../components/Shared/TextButton";

function SearchResultsPage({onNavigateBack: handleNavigateBack}) {
  return <MainPageContentWrapper>
    <TextButton onClick={handleNavigateBack}>
      Back
    </TextButton>
    <SearchResultsList />
  </MainPageContentWrapper>;
}

export default SearchResultsPage;
