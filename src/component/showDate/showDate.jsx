import React, { useEffect, useRef, useState } from "react";
import styles from "./showDate.module.css";
import MakeDate from "../makeDate/makeDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ShowDate = ({ onClickDate, MakeCalendar, result, currentCal }) => {
  const countDay = [];
  const day = MakeCalendar.day;
  let yy = MakeCalendar.today.getFullYear();
  let mm = MakeCalendar.today.getMonth();
  let currentMonth = MakeCalendar.monList[mm];
  let firstDay = MakeCalendar.getFirstDay(yy, mm);
  let lastDay = MakeCalendar.getLastDay(yy, mm);
  let setFirstDay = firstDay.getDay();

  const [stateCountDay, setStateCountDay] = useState(countDay);
  const [stateCurrentMonth, setStateCurrentMonth] = useState(currentMonth);
  const [stateYear, setStateYear] = useState(yy);
  const [stateClickDate, setStateClickDate] = useState([
    {
      date: stateCountDay,
      month: stateCurrentMonth,
      currentCal: 0,
      defaultCal: 1800,
    },
  ]);

  const clickPrevMonth = () => {
    let countDay = [];
    let prevMonth = MakeCalendar.prevMonth();
    let yy = prevMonth.getFullYear();
    let mm = prevMonth.getMonth();
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
    setStateCountDay(countDay);
    setStateCurrentMonth(currentMonth);
    setStateYear(yy);
  };

  const clickNextMonth = () => {
    let countDay = [];
    let nextMonth = MakeCalendar.nextMonth();
    let yy = nextMonth.getFullYear();
    let mm = nextMonth.getMonth();
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
    setStateCountDay(countDay);
    setStateCurrentMonth(currentMonth);
    setStateYear(yy);
  };

  for (let j = 0; j < setFirstDay; j++) {
    countDay.push("");
  }
  for (let i = 1; i < lastDay.getDate() + 1; i++) {
    countDay.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faArrowLeft} onClick={clickPrevMonth} />
        <span>{stateCurrentMonth}</span>
        <span>{stateYear}</span>
        <FontAwesomeIcon icon={faArrowRight} onClick={clickNextMonth} />
      </div>
      <ul className={styles.dayContainer}>
        {day.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul className={styles.makeDateContainer}>
        {stateCountDay.map((date, index) => (
          <MakeDate
            date={date}
            onClickDate={onClickDate}
            key={index}
            stateCurrentMonth={stateCurrentMonth}
            result={result}
            currentCal={currentCal}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShowDate;
