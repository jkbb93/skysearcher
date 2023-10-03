import { useState, useEffect } from "react";

function DebouncedInput({
  value: passedValue,
  onChange: onChangeCallback,
  minCharacters = 3,
  timeout,
  effectCallback
}) {
  const [value, setValue] = useState(passedValue || "");
  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    setHasChanged(true);

    if (typeof onChangeCallback === "function") {
      onChangeCallback(event.target.value);
    }
  };

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  useEffect(() => {
    if (
      !hasChanged ||
      value.length < minCharacters ||
      typeof effectCallback !== "function"
    )
      return;

    let timer = setTimeout(() => {
      effectCallback();
    }, timeout);

    return () => clearTimeout(timer);
  }, [value, hasChanged, minCharacters, effectCallback, timeout]);

  return <input type="text" value={value} onChange={handleChange} />;
}

export default DebouncedInput;
