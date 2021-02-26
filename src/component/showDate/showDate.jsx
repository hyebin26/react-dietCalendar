import React from "react";
import styles from "./showDate.module.css";
import MakeDate from "../makeDate/makeDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ShowDate = ({
  onClickDate,
  result,
  currentCal,
  clickPrevMonth,
  clickNextMonth,
  stateCurrentMonth,
  stateYear,
  todayMonth,
  stateCountDay,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faArrowLeft} onClick={clickPrevMonth} />
        <span>{stateCurrentMonth}</span>
        <span>{stateYear}</span>
        <FontAwesomeIcon icon={faArrowRight} onClick={clickNextMonth} />
      </div>
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
              currentCal={currentCal}
              todayMonth={todayMonth}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ShowDate;
