import styles from "./MainPageContentWrapper.module.css";

function MainPageContentWrapper({ children, className }) {
  return <main className={`${styles.main} ${className}`}>{children}</main>;
}

export default MainPageContentWrapper;
