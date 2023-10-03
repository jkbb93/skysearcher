import useMediaQuery from "../../../hooks/useMediaQuery";
import { FlightSearchForm } from "../../../features/flightSearch";
import styles from "./FlightSearchSection.module.css";

function FlightSearchSection() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <section className={styles.section}>
      {matches && <h1>Millions of flights. One Simple search.</h1>}
      <FlightSearchForm />
    </section>
  );
}

export default FlightSearchSection;
