import React, { memo } from "react";
import styles from "./showDate.module.css";
import MakeDate from "../makeDate/makeDate";
import SlideCalendar from "../slideCalendar/slideCalendar";

const ShowDate = memo(
  ({
    onClickDate,
    result,
    clickPrevMonth,
    clickNextMonth,
    stateCurrentMonth,
    stateYear,
    todayMonth,
    stateCountDay,
    stateClickDate,
  }) => {
    return (
      <div className={styles.container}>
        <SlideCalendar
          stateCurrentMonth={stateCurrentMonth}
          stateYear={stateYear}
          clickNextMonth={clickNextMonth}
          clickPrevMonth={clickPrevMonth}
        />
        <ul className={styles.dayContainer}>
          <li>일</li>
          <li>월</li>
          <li>화</li>
          <li>수</li>
          <li>목</li>
          <li>금</li>
          <li>토</li>
        </ul>
        <ul className={styles.makeDateContainer}>
          {stateCountDay.map((date, index) => {
            return (
              <MakeDate
                date={date}
                onClickDate={onClickDate}
                key={index}
                stateCurrentMonth={stateCurrentMonth}
                result={result}
                todayMonth={todayMonth}
                stateClickDate={stateClickDate}
              />
            );
          })}
        </ul>
      </div>
    );
  }
);

export default ShowDate;
