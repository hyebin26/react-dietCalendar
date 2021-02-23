import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./makeDate.module.css";
import cx from "classnames";

const MakeDate = ({
  date,
  onClickDate,
  stateCurrentMonth,
  result,
  currentCal,
}) => {
  console.log(stateCurrentMonth);
  const today = new Date().getDate();
  return (
    <li className={styles.date}>
      <Link
        to={{
          pathname: `/Calendar`,
          state: { result, stateCurrentMonth, date },
        }}
        className={cx(styles.title, today === date ? styles.today : false)}
        onClick={onClickDate}
      >
        {date}
      </Link>
      <span className={styles.cal}>{result - currentCal}cal</span>
    </li>
  );
};

export default MakeDate;
