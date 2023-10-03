import { ReactComponent as XMarkIcon } from "./xmark-solid.svg";
import styles from "./ModalHeader.module.css";

function ModalHeader({ heading, onClose: handleClose, className }) {
  const iconDimensions = "60%";

  return (
    <div className={`${styles.header} ${className}`}>
      <button
        type="button"
        onClick={handleClose}
        className={styles["close-button"]}
      >
        <XMarkIcon width={iconDimensions} height={iconDimensions} />
      </button>
      {heading && <h1>{heading}</h1>}
    </div>
  );
}

export default ModalHeader;
