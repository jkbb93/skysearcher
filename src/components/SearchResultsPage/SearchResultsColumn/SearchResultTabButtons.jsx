import { useState } from "react";
import Price from "../../Shared/Price";
import styles from "./SearchResultTabButtons.module.css";

function SearchResultTabButtons({results}) {
  const [activeFilter, setActiveFilter] = useState("best");

  const buttonData = [
    { filterType: "best", heading: "Best", price: 10.99, duration: "24h" },
    {
      filterType: "cheapest",
      heading: "Cheapest",
      price: results[0].price.total,
      duration: "24h",
    },
    {
      filterType: "fastest",
      heading: "Fastest",
      price: 10.99,
      duration: "24h",
    },
  ];

  const handleClick = (filterType) => setActiveFilter(filterType);

  const getActiveClass = (filterType) =>
    filterType === activeFilter ? styles.active : "";

  const buttons = buttonData.map((button) => (
    <button
      key={button.filterType}
      onClick={() => handleClick(button.filterType)}
      className={`${styles.button} ${getActiveClass(button.filterType)}`}
    >
      <span className={styles.heading}>{button.heading}</span>
      <Price value={button.price} currency="GBP" className={styles.price} />
      <span className={styles.duration}>{button.duration}</span>
    </button>
  ));

  return <div className={styles.tabs}>{buttons}</div>;
}

export default SearchResultTabButtons;
