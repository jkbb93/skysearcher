import styles from "./SmallSearchControlButton.module.css";

function SmallSearchControlButton({
  icon,
  value,
  placeholder = "Click to add details",
  onClick: clickHandler,
  className
}) {
  const valuePlaceholderClass = !value ? styles.placeholder : "";

  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={clickHandler}
    >
      {icon && <div className={styles["icon-wrapper"]}>{icon}</div>}
      <span className={`${styles["button-value"]} ${valuePlaceholderClass}`}>
        {value ? value : placeholder}
      </span>
    </button>
  );
}

export default SmallSearchControlButton;
