import styles from "./TextButton.module.css";

function TextButton({ children, className, onClick: handleClick }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default TextButton;
