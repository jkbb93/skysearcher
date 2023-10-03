import styles from "./Scroller.module.css";

function Scroller({ children }) {
  return <div className={styles.scroller}>{children}</div>;
}

export default Scroller;
