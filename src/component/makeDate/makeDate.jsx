import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./makeDate.module.css";
import cx from "classnames";

const MakeDate = ({ date, onClickDate, currentMonth, result, currentCal }) => {
  const today = new Date().getDate();
  return (
    <li className={styles.date}>
      <Link
        to={{
          pathname: `/Calendar/${currentMonth}/${date}`,
          state: { result, currentMonth, date },
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
