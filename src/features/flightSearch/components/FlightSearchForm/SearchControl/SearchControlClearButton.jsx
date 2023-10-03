import { ReactComponent as CircleXMarkIcon } from "./circle-xmark-solid.svg";
import styles from "./SearchControlClearButton.module.css";

function SearchControlClearButton({ onClick: handleClick }) {
  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      <CircleXMarkIcon width={"20px"} />
    </button>
  );
}

export default SearchControlClearButton;
