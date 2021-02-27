import React, { useEffect, useRef } from "react";
import styles from "./makeDate.module.css";
import cx from "classnames";

const MakeDate = ({
  date,
  onClickDate,
  stateCurrentMonth,
  todayMonth,
  changeResult,
  stateClickDate,
}) => {
  const markToday =
    stateCurrentMonth === todayMonth ? new Date().getDate() : false;

  const clickDate = (e) => {
    onClickDate(e.target.innerText, stateCurrentMonth);
  };
  const spanRef = useRef();

  const onChangeResult = (e) => {
    changeResult(e.target.innerTet);
  };

  useEffect(() => {});
  return (
    <li className={styles.date}>
      <p
        className={cx(styles.title, markToday === date ? styles.today : false)}
        onClick={clickDate}
      >
        {date}
      </p>
      <span className={styles.cal} onChange={onChangeResult} ref={spanRef}>
        {stateClickDate.map((obj) => {
          if (obj.date === date && obj.month === stateCurrentMonth) {
            if (obj.resultCal > 0) {
              return "+" + obj.resultCal + "Cal";
            } else {
              return obj.resultCal + "Cal";
            }
          } else {
            return false;
          }
        })}
      </span>
    </li>
  );
};

export default MakeDate;
