import styles from "./SearchControlWrapper.module.css";

function SearchControlWrapper({
  children,
  hasClearButton,
  isActive,
  groupPosition
}) {
  const hasClearButtonClass = hasClearButton ? styles["has-clear-button"] : "";
  const activeClass = isActive ? styles.active : "";

  let groupPositionClass = "";

  if (groupPosition === "start") {
    groupPositionClass = styles["round-left-corners"];
  }

  if (groupPosition === "end") {
    groupPositionClass = styles["round-right-corners"];
  }

  return (
    <div
      className={`${styles.wrapper} ${hasClearButtonClass} ${activeClass} ${groupPositionClass}`}
    >
      {children}
    </div>
  );
}

export default SearchControlWrapper;
