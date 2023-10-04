import Card from "../Shared/Card";
import Button from "../Shared/Button";
import formatPrice from "./formatPrice";
import styles from "./SearchResultCard.module.css";
import FlightLeg from "./FlightLeg";

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
            <span className={styles["price-total"]}>
              {formatPrice(data.price.currency, data.price.total)}
            </span>
          </div>
          <Button onClick={handleCardClick}>Select</Button>
        </div>
      </div>
    </Card>
  );
}

export default SearchResultCard;
