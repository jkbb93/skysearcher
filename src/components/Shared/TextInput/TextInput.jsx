import styles from "./TextInput.module.css";

function TextInput({ icon, id, value, onChange: changeHandler, placeholder }) {
  return (
    <div className={styles.wrapper}>
      {icon}
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
        className={styles.input}
      />
    </div>
  );
}

export default TextInput;
