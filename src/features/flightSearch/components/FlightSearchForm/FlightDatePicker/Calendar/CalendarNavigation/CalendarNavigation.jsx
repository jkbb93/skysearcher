import { ReactComponent as ChevronLeftIcon } from "./chevron-left.svg";
import styles from "./CalendarNavigation.module.css";

function CalendarNavigationButton({
  isNextButton,
  onClick: handleClick,
  disabled
}) {
  const buttonClasses = `${styles.button} ${
    isNextButton ? styles["flip-horizontal"] : ""
  }`;

  const iconSize = "50%";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClasses}
      disabled={disabled}
    >
      <ChevronLeftIcon width={iconSize} height={iconSize} />
    </button>
  );
}

function CalendarNavigation({
  header = "Calendar",
  hasPrevButton = true,
  hasNextButton = true,
  disablePrevButton,
  disableNextButton,
  onPrevButtonClick: handlePrevButtonClick,
  onNextButtonClick: handleNextButtonClick
}) {
  return (
    <div className={styles.navigation}>
      <div className={styles["button-slot"]}>
        {hasPrevButton && (
          <CalendarNavigationButton
            onClick={handlePrevButtonClick}
            disabled={disablePrevButton}
          />
        )}
      </div>
      <h2>{header}</h2>
      <div className={styles["button-slot"]}>
        {hasNextButton && (
          <CalendarNavigationButton
            isNextButton={true}
            onClick={handleNextButtonClick}
            disabled={disableNextButton}
          />
        )}
      </div>
    </div>
  );
}

export default CalendarNavigation;
