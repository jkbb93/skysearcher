import GraphicPromo from "../../Shared/GraphicPromo";
import FeaturedDestinations from "./FeaturedDestinations";
import CompanyInfoAccordions from "./CompanyInfoAccordions";
import beachImage from "./beach.jpg";
import styles from "./AdSection.module.css";

function AdSection() {
  return (
    <section className={styles.section}>
      <GraphicPromo
        src={beachImage}
        alt="Image of a tropical beach"
        kicker="DESTINATION GUIDE"
        headline="Feels like summer"
        strapline="Explore our top picks for sun and sand this summer"
        buttonText="Read the guide"
        imgObjectPosition="0% 60%"
        imgBrightness={0.85}
        buttonColorScheme="light"
        mobileAlignment="center"
      />
      <FeaturedDestinations />
      <CompanyInfoAccordions />
    </section>
  );
}

export default AdSection;
