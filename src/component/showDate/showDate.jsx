import React, { useEffect, useRef, useState } from "react";
import styles from "./showDate.module.css";
import MakeDate from "../makeDate/makeDate";

const ShowDate = ({ onClickDate, MakeCalendar, result, currentCal }) => {
  const monthRef = useRef();
  const yearRef = useRef();

  let countDay = [];
  const day = MakeCalendar.day;

  let yy = MakeCalendar.today.getFullYear();
  let mm = MakeCalendar.today.getMonth();
  let currentMonth = MakeCalendar.monList[mm];
  let firstDay = MakeCalendar.getFirstDay(yy, mm);
  let lastDay = MakeCalendar.getLastDay(yy, mm);
  let setFirstDay = firstDay.getDay();

  for (let j = 0; j < setFirstDay; j++) {
    countDay.push("");
  }
  for (let i = 1; i < lastDay.getDate() + 1; i++) {
    countDay.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span ref={monthRef}>{currentMonth}</span>
        <span ref={yearRef}>{yy}</span>
      </div>
      <ul className={styles.dayContainer}>
        {day.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <ul className={styles.makeDateContainer}>
        {countDay.map((date, index) => (
          <MakeDate
            date={date}
            onClickDate={onClickDate}
            key={index}
            currentMonth={currentMonth}
            result={result}
            currentCal={currentCal}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShowDate;
