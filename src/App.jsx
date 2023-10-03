import { useFlightSearchResults } from "./features/flightSearch";
import { RootLayout } from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import { HomePage, SearchResultsPage } from "./pages";
import "./styles.css";

export default function App() {
  const { data, isLoading } = useFlightSearchResults();

  return (
    <RootLayout>
      <HomePage />
      {isLoading && <LoadingScreen message="Searching flights..." />}
      {data && false && <SearchResultsPage />}
    </RootLayout>
  );
}
