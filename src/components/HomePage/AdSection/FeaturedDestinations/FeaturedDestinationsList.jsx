import { useState } from "react";
import { useFlightSearchForm } from "../../../../features/flightSearch";
import useMediaQuery, { breakpoints } from "../../../../hooks/useMediaQuery";
import DestinationCard from "./DestinationCard";
import TextButton from "../../../Shared/TextButton";
import featuredDestinationsData from "./featuredDestinationsData";
import styles from "./FeaturedDestinationsList.module.css";

function FeaturedDestinationsList() {
  const { updateSearchValues } = useFlightSearchForm();
  const mediaMatches = useMediaQuery(breakpoints.md);
  const isSmallScreen = !mediaMatches;
  const [expanded, setExpanded] = useState(false);

  const getExpandableListLength = () =>
    expanded ? featuredDestinationsData.length : 3;

  const listLength = isSmallScreen
    ? getExpandableListLength()
    : featuredDestinationsData.length;

  const destinationsToDisplay = featuredDestinationsData.slice(0, listLength);

  const handleDestinationClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

    updateSearchValues({});
  };

  const cards = destinationsToDisplay.map((destination) => (
    <li key={destination.name}>
      <DestinationCard
        imgSrc={destination.imgSrc}
        imgAlt={destination.imgAlt}
        destinationName={destination.name}
        buttonText="Search flights"
        onButtonClick={handleDestinationClick}
      />
    </li>
  ));

  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <ul className={styles.list}>
      {cards}
      {isSmallScreen && (
        <TextButton onClick={handleToggle}>
          {`Show ${expanded ? "less" : "more"}`}
        </TextButton>
      )}
    </ul>
  );
}

export default FeaturedDestinationsList;
