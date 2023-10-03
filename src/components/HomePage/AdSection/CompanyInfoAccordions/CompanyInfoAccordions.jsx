import { Accordion, AccordionGroup } from "../../../Shared/Accordion";
import FeatureList from "./FeatureList";
import DestinationsInfoList from "./DestinationsInfoList";
import styles from "./CompanyInfoAccordions.module.css";

function CompanyInfoAccordions() {
  return (
    <div className={styles.accordions}>
      <h2>Find your flight with SkySearcher</h2>
      <AccordionGroup>
        <Accordion heading="Why choose SkySearcher?">
          <FeatureList />
        </Accordion>
        <Accordion heading="Our Destinations">
          <DestinationsInfoList />
        </Accordion>
      </AccordionGroup>
    </div>
  );
}

export default CompanyInfoAccordions;
