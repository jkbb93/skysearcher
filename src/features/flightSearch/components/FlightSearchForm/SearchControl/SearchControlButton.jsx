import SearchControlWrapper from "./SearchControlWrapper";
import SearchControlClearButton from "./SearchControlClearButton";
import styles from "./SearchControlButton.module.css";

function SearchControlButton({
  label = "Add details",
  value,
  placeholder = "Click to add details",
  onClick: handleClick,
  onClear: handleClear,
  disableClearButton,
  isActive,
  groupPosition
}) {
  const valuePlaceholderClass = !value ? styles.placeholder : "";

  return (
    <SearchControlWrapper
      hasClearButton={!disableClearButton && value}
      isActive={isActive}
      groupPosition={groupPosition}
    >
      <button type="button" className={styles.button} onClick={handleClick}>
        <span className={styles.label}>{label}</span>
        <span className={`${styles["button-value"]} ${valuePlaceholderClass}`}>
          {value ? value : placeholder}
        </span>
      </button>
      {!disableClearButton && value && (
        <SearchControlClearButton onClick={handleClear} />
      )}
    </SearchControlWrapper>
  );
}

export default SearchControlButton;
