import { forwardRef, useState, useRef } from "react";
import { ReactComponent as CircleXMarkIcon } from "../../../assets/icons/circle-xmark-solid.svg";
import styles from "./TextInput.module.css";

const TextInput = forwardRef(function TextInput(
  {
    id,
    name = "",
    value: passedValue = "",
    onChange: onChangeCallback,
    placeholder,
    clearable = true,
    spellCheck = false,
    className
  },
  forwardedRef
) {
  const [value, setValue] = useState(passedValue);
  const inputRef = useRef(null);

  const assignRefs = (node) => {
    inputRef.current = node;

    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  const updateExternalState = (newValue) => {
    if (typeof onChangeCallback === "function") {
      onChangeCallback(newValue);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    updateExternalState(event.target.value);
  };

  const handleClear = () => {
    setValue("");
    updateExternalState("");
    inputRef.current.focus();
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <input
        ref={assignRefs}
        id={id}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.input}
        spellCheck={spellCheck}
      />
      {clearable && value.length > 0 && (
        <button className={styles.clear} onClick={handleClear}>
          <CircleXMarkIcon />
        </button>
      )}
    </div>
  );
});

export default TextInput;
