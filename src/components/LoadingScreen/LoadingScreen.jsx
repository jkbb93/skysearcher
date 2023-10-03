import { FullscreenModal } from "../Shared/Modal";
import styles from "./LoadingScreen.module.css";

function LoadingScreen({ message = "Loading..." }) {
  return (
    <FullscreenModal className={styles.modal}>
      <div className={styles.content}>
        <h1>{message}</h1>
      </div>
    </FullscreenModal>
  );
}

export default LoadingScreen;
