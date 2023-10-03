import styles from "./CardAlt.module.css";

function Card({ children, className }) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}

export default Card;
