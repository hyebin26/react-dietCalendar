import React, { useEffect, useRef, useState } from "react";
import styles from "./showDate.module.css";
import MakeDate from "../makeDate/makeDate";

const ShowDate = ({ onClickDate, MakeCalendar }) => {
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

  const loadDate = (fullDate) => {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    monthRef.current.innerText = currentMonth;
    yearRef.current.innerText = yy;
  };

  useEffect(() => {
    loadDate(MakeCalendar.today);
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span ref={monthRef}></span>
        <span ref={yearRef}></span>
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
          />
        ))}
      </ul>
    </div>
  );
};

export default ShowDate;
