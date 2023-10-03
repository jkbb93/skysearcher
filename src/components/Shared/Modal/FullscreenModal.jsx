import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./FullscreenModal.module.css";

function FullscreenModal({ children, className }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  return createPortal(
    <div className={styles.modal}>
      <main className={`${styles.content} ${className}`}>{children}</main>
    </div>,
    document.body
  );
}

export default FullscreenModal;
