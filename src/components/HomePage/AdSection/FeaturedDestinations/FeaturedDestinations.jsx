import FeaturedDestinationsList from "./FeaturedDestinationsList";
import styles from "./FeaturedDestinations.module.css";

function FeaturedDestinations() {
  return (
    <div className={styles["destination-cards"]}>
      <h2>Popular right now</h2>
      <p>Check out our top destinations, chosen by other travellers.</p>
      <FeaturedDestinationsList />
    </div>
  );
}

export default FeaturedDestinations;
