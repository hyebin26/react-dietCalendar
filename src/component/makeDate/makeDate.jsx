import React, { useState } from "react";
import styles from "./makeDate.module.css";
import cx from "classnames";

const MakeDate = ({
  date,
  onClickDate,
  stateCurrentMonth,
  result,
  currentCal,
  todayMonth,
}) => {
  const markToday =
    stateCurrentMonth === todayMonth ? new Date().getDate() : false;

  const clickDate = (e) => {
    onClickDate(e.target.innerText, stateCurrentMonth);
  };
  return (
    <li className={styles.date}>
      <p
        className={cx(styles.title, markToday === date ? styles.today : false)}
        onClick={clickDate}
      >
        {date}
      </p>
      <span className={styles.cal}>{result}</span>
    </li>
  );
};

export default MakeDate;
