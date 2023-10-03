import styles from "./DropdownMenu.module.css";

function DropdownMenu({ children, className }) {
  return (
    <div className={`${styles["dropdown-menu"]} ${className}`}>{children}</div>
  );
}

export default DropdownMenu;
