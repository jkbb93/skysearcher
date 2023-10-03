import styles from "./SiteFooter.module.css";

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span>
        This website was created as a clone of{" "}
        <a href="https://www.skyscanner.net/">SkyScanner.net</a>, for
        educational/portfolio purposes only, and has no commercial value or
        business use. I do not own any rights to the original design, logo, or
        brand. All rights belong to the respective owner.
      </span>
    </footer>
  );
}

export default SiteFooter;
