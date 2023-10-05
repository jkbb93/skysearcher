import Card from "../Shared/Card";
import FlightLeg from "./FlightLeg/FlightLeg";
import Price from "../Shared/Price";
import Button from "../Shared/Button";
import styles from "./SearchResultCard.module.css";

function SearchResultCard({ data, onSelect: handleSelect }) {
  const handleCardClick = () => {
    handleSelect(data);
  };

  return (
    <Card>
      <div className={styles["card-content"]} onClick={handleCardClick}>
        <div className={styles["flight-info"]}>
          <FlightLeg flightData={data.outbound} type="outbound" />
          <FlightLeg flightData={data.return} type="return" />
        </div>
        <div className={styles.cta}>
          <div className={styles.price}>
            <span className={styles["price-label"]}>Total price</span>
            <Price
              value={data.price.total}
              currency={data.price.currency}
              className={styles["price-total"]}
            />
          </div>
          <Button onClick={handleCardClick}>Select</Button>
        </div>
      </div>
    </Card>
  );
}

export default SearchResultCard;
