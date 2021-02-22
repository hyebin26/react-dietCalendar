import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./clickDate.module.css";

const ClickDate = ({
  result,
  clickedDate,
  currentCal,
  onChangeBreakfast,
  onChangeDinner,
  onChangeLunch,
}) => {
  const changeBreakfast = (e) => {
    onChangeBreakfast(e.target.value);
  };
  const changeLunch = (e) => {
    onChangeLunch(e.target.value);
  };
  const changeDinner = (e) => {
    onChangeDinner(e.target.value);
  };
  useEffect(() => {});
  return (
    <div className={styles.container}>
      <h2 className={styles.day}>February {clickedDate}</h2>
      <div className={styles.itemContainer}>
        <span>아침(cal): </span>
        <input type="number" onChange={changeBreakfast} />
      </div>
      <div className={styles.itemContainer}>
        <span>점심(cal): </span>
        <input type="number" onChange={changeLunch} />
      </div>
      <div className={styles.itemContainer}>
        <span>저녁(cal): </span>
        <input type="number" onChange={changeDinner} />
      </div>
      <h3>현재 칼로리: {currentCal}cal</h3>
      <h3>하루 칼로리: {result}cal</h3>
      <Link to="/Home" className={styles.link}>
        하루 칼로리 설정하기
      </Link>
    </div>
  );
};

export default ClickDate;
