import styles from "./Card.module.css";

/*
  Uses ::after pseudo element for shadow.

*/

function Card({ children, className, padding = "0px" }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div style={{ padding }} className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Card;
