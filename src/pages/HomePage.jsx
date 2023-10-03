import { MainPageContentWrapper } from "../components/Layout";
import FlightSearchSection from "../components/HomePage/FlightSearchSection";
import AdSection from "../components/HomePage/AdSection/AdSection";

function HomePage() {
  return (
    <MainPageContentWrapper>
      <FlightSearchSection />
      <AdSection />
    </MainPageContentWrapper>
  );
}

export default HomePage;
