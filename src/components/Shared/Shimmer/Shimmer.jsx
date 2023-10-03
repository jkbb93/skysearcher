import styles from "./Shimmer.module.css";

function Shimmer({ children }) {
  return (
    <div className={styles["shimmer-container"]}>
      {children}
      <div className="shimmer"></div>
    </div>
  );
}

export default Shimmer;
