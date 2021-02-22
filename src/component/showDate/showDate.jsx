import React, { useEffect, useRef } from "react";
import styles from "./showDate.module.css";
import MakeCalendar from "../../common/calendar";
import MakeDate from "../makeDate/makeDate";

const ShowDate = (props) => {
  const monthRef = useRef();
  const yearRef = useRef();

  let countDay = [];
  const day = MakeCalendar.day;

  const today = new Date();
  let yy = today.getFullYear();
  let mm = today.getMonth();
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

    monthRef.current.innerText = MakeCalendar.monList[mm];
    yearRef.current.innerText = yy;
  };
  useEffect(() => {
    loadDate(today);
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
        {countDay.map((date) => (
          <MakeDate date={date} day={day} />
        ))}
      </ul>
    </div>
  );
};

export default ShowDate;
