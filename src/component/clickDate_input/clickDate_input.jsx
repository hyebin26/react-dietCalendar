import React, { memo } from "react";
import styles from "./clickDate_input.module.css";

const ClickDateInput = memo(
  ({ value, onChangeDinner, onChangeBreakfast, onChangeLunch }) => {
    const onChangeInput = (e) => {
      if (value === "아침") {
        onChangeBreakfast(e.target.value);
      } //
      else if (value === "점심") {
        onChangeLunch(e.target.value);
      } //
      else {
        onChangeDinner(e.target.value);
      }
    };
    return (
      <div className={styles.itemContainer}>
        <span>{value}(cal): </span>
        <input type="number" onChange={onChangeInput} name="Dinner" />
      </div>
    );
  }
);

export default ClickDateInput;
