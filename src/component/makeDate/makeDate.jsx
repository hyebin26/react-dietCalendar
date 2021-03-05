import React, { memo } from "react";
import styles from "./makeDate.module.css";
import cx from "classnames";
import MakeDateList from "../makeDateList/makeDateList";

const MakeDate = memo(
  ({ date, onClickDate, stateCurrentMonth, todayMonth, stateClickDate }) => {
    const markToday =
      stateCurrentMonth === todayMonth ? new Date().getDate() : false;

    const clickDate = (e) => {
      onClickDate(e.target.innerText, stateCurrentMonth);
    };

    return (
      <li className={styles.date}>
        <p
          className={cx(
            styles.title,
            markToday === date ? styles.today : false
          )}
          onClick={clickDate}
        >
          {date}
        </p>
        {stateClickDate.map((clickObj, index) => {
          if (clickObj.date === date && clickObj.month === stateCurrentMonth) {
            return <MakeDateList resultCal={clickObj.resultCal} key={index} />;
          } else {
            return false;
          }
        })}
      </li>
    );
  }
);

export default MakeDate;
