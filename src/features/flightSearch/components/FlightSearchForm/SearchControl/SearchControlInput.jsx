import {
  forwardRef,
  useState,
  useId,
  useRef,
  useCallback,
  useImperativeHandle
} from "react";
import SearchControlWrapper from "./SearchControlWrapper";
import SearchControlClearButton from "./SearchControlClearButton";
import styles from "./SearchControlInput.module.css";

const SearchControlInput = forwardRef(function SearchControlInput(
  {
    label = "Add details",
    name,
    value,
    placeholder = "Enter details",
    onChange: handleChange,
    onClear: onClearCallback,
    disableClearButton,
    isActive,
    groupPosition
  },
  forwardedRef
) {
  const [inputFocused, setInputFocused] = useState(false);
  const id = useId();
  const inputRef = useRef(null);

  const focusInput = useCallback(() => {
    inputRef.current.focus();
    setInputFocused(true);
  }, []);

  useImperativeHandle(
    forwardedRef,
    () => {
      return {
        focus() {
          focusInput();
        }
      };
    },
    [focusInput]
  );

  const handleInputBlur = () => setInputFocused(false);

  const handleClear = () => {
    if (typeof onClearCallback === "function") {
      onClearCallback();
    }
    focusInput();
  };

  return (
    <SearchControlWrapper
      hasClearButton={!disableClearButton && value}
      isActive={inputFocused || isActive}
      groupPosition={groupPosition}
    >
      <div onClick={focusInput} className={styles["input-wrapper"]}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="text"
          spellCheck="false"
          autoComplete="off"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleInputBlur}
          className={styles.input}
        />
      </div>
      {!disableClearButton && value && (
        <SearchControlClearButton onClick={handleClear} />
      )}
    </SearchControlWrapper>
  );
});

export default SearchControlInput;
