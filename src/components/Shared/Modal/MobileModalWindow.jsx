import FullscreenModal from "./FullscreenModal";
import ModalHeader from "./ModalHeader";
import styles from "./MobileModalWindow.module.css";

function MobileModalWindow({ children, heading, onClose: handleClose }) {
  return (
    <FullscreenModal className={styles.modal}>
      <ModalHeader
        heading={heading}
        onClose={handleClose}
        className={styles.header}
      />
      {children}
    </FullscreenModal>
  );
}

export default MobileModalWindow;
