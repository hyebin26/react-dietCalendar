import React, { useEffect, useState } from "react";
import styles from "./clickDate.module.css";

const ClickDate = ({ result }) => {
  const [cal, setCal] = useState(0);
  const [breakfastValue, setBreakfastValue] = useState(0);
  const [lunchValue, setLunchValue] = useState(0);
  const [dinnerValue, setDinnerValue] = useState(0);

  console.log(breakfastValue);
  const changeBreakfast = (e) => {
    setBreakfastValue(parseInt(e.target.value));
  };
  const changeLunch = (e) => {
    setLunchValue(parseInt(e.target.value));
  };
  const changeDinner = (e) => {
    setDinnerValue(parseInt(e.target.value));
  };
  useEffect(() => {
    setCal(breakfastValue + lunchValue + dinnerValue);
  });
  return (
    <div className={styles.container}>
      <h2 className={styles.day}>February 22</h2>
      <div className={styles.itemContainer}>
        <span>아침(cal): </span>
        <input
          type="number"
          onChange={changeBreakfast}
          value={breakfastValue}
        />
      </div>
      <div className={styles.itemContainer}>
        <span>점심(cal): </span>
        <input type="number" onChange={changeLunch} value={lunchValue} />
      </div>
      <div className={styles.itemContainer}>
        <span>저녁(cal): </span>
        <input type="number" onChange={changeDinner} value={dinnerValue} />
      </div>
      <h3>현재 칼로리: {cal}cal</h3>
      <h3>하루 칼로리: {result}cal</h3>
    </div>
  );
};

export default ClickDate;
