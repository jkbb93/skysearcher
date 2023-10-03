import Card from "../../../Shared/Card";
import TextButton from "../../../Shared/TextButton";
import styles from "./DestinationCard.module.css";

function DestinationCard({
  imgSrc,
  imgAlt,
  destinationName,
  buttonText,
  onButtonClick: handleButtonClick
}) {
  return (
    <Card className={styles.card}>
      <img src={imgSrc} alt={imgAlt} />
      <div className={styles.copy}>
        <h3>{destinationName}</h3>
        <TextButton onClick={handleButtonClick}>{buttonText}</TextButton>
      </div>
    </Card>
  );
}

export default DestinationCard;
