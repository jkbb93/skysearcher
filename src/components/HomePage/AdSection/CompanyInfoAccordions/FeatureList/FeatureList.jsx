import featureListData from "./featureListData";
import styles from "./FeatureList.module.css";

function FeatureList() {
  const listItems = featureListData.map((feature) => (
    <li key={feature.heading}>
      <h3>{feature.heading}</h3>
      <span>{feature.content}</span>
    </li>
  ));

  return <ul className={styles.list}>{listItems}</ul>;
}

export default FeatureList;
