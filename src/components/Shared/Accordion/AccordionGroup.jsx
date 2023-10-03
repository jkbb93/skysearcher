import styles from "./AccordionGroup.module.css";

/*
  Adds dividers to wrapped Accordions
*/

function AccordionGroup({ children }) {
  return <div className={styles["accordion-group"]}>{children}</div>;
}

export default AccordionGroup;
