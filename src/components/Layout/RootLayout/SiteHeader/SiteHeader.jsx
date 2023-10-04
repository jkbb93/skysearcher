import styles from "./SiteHeader.module.css";

function SiteHeader({ onLogoClick: handleLogoClick }) {
  return (
    <header className={styles.header}>
      <h1 onClick={handleLogoClick} className={styles.logo}>
        SkySearcher
      </h1>
    </header>
  );
}

export default SiteHeader;
