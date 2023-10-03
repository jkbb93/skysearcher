import TextButton from "../../../../Shared/TextButton";
import destinationsInfoData from "./destinationsInfoData";
import styles from "./DestinationsInfoList.module.css";

function DestinationList() {
  const handleDestinationClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const listItems = destinationsInfoData.map((destination) => (
    <li key={destination.name}>
      <span>{destination.flagEmoji}</span>
      <TextButton onClick={handleDestinationClick}>
        {destination.name}
      </TextButton>
    </li>
  ));

  return <ul className={styles.list}>{listItems}</ul>;
}

export default DestinationList;
