import styles from "./SiteHeader.module.css";

function SiteHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>SkySearcher</h1>
    </header>
  );
}

export default SiteHeader;
