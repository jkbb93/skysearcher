import { useState } from "react";
import { ReactComponent as PlusIcon } from "./plus-solid.svg";
import { ReactComponent as MinusIcon } from "./minus-solid.svg";
import styles from "./Nudger.module.css";
import useControlledState from "../hooks/useControlledState";

function Nudger({
  id,
  name,
  value: passedValue,
  onChange: onChangeCallback,
  min = 0,
  max
}) {
  const [value, setValue] = useState(min);
  const hasMin = Number.isInteger(min);
  const hasMax = Number.isInteger(max);

  const setSyncedValue = useControlledState({
    internalState: value,
    setInternalState: setValue,
    externalState: passedValue,
    setExternalState: onChangeCallback
  });

  const handleIncrement = () =>
    setSyncedValue((prev) => (hasMax && prev >= max ? prev : prev + 1));

  const handleDecrement = () =>
    setSyncedValue((prev) => (hasMin && prev <= min ? prev : prev - 1));

  const iconWidth = "14px";

  return (
    <div className={styles.nudger}>
      <button type="button" onClick={handleDecrement}>
        <MinusIcon width={iconWidth} />
      </button>
      <input id={id} name={name} type="text" readOnly={true} value={value} />
      <button type="button" onClick={handleIncrement}>
        <PlusIcon width={iconWidth} />
      </button>
    </div>
  );
}

export default Nudger;
