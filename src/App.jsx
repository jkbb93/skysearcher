import { useFlightSearchResults } from "./features/flightSearch";
import { RootLayout } from "./components/Layout";
import { HomePage, SearchResultsPage } from "./pages";
import LoadingScreen from "./components/LoadingScreen";
import "./styles.css";

export default function App() {
  const { data, isLoading, clearData } = useFlightSearchResults();

  const handleNavigateBack = () => clearData();

  return (
    <RootLayout onHeaderLogoClick={handleNavigateBack}>
      {isLoading && <LoadingScreen message="Searching flights..." />}
      {!data && <HomePage />}
      {data && <SearchResultsPage onNavigateBack={handleNavigateBack} />}
    </RootLayout>
  );
}
