import React, { useState } from "react";
import Styles from "./InputBox.module.css";

function inputBox(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const submitValue = inputValue;
    setInputValue("");
    props.onSubmit(submitValue);
  }

  return (
    <div>
      <form action="" className={Styles.form} onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className={Styles.input}
          value={inputValue}
          id="input"
          onChange={handleChange}
          type="text"
        />

        <button type="submit" className={Styles.btn}>
          Add
        </button>
      </form>
    </div>
  );
}

export default inputBox;
