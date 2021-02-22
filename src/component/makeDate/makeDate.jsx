import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./makeDate.module.css";

const MakeDate = ({ date, onClickDate, currentMonth }) => {
  return (
    <li className={styles.date}>
      <Link
        to={{
          pathname: `/Calendar/${currentMonth}/${date}`,
          state: { date },
        }}
        className={styles.title}
        onClick={onClickDate}
      >
        {date}
      </Link>
      <span className={styles.cal}>+500Cal</span>
    </li>
  );
};

export default MakeDate;
