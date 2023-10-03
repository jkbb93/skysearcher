import styles from "./Button.module.css";

function Button({
  children,
  type = "button",
  onClick: handleClick,
  disabled,
  className
}) {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
