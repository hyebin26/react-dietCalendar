import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ClickDate from "../clickDate/clickDate";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./calendar.module.css";
import ShowDate from "../showDate/showDate";
import MakeCalendar from "../../common/calendar";

const Calendar = ({ repository, auth }) => {
  const location = useLocation();
  const result =
    location.state.result === undefined ? "" : location.state.result;

  const countDay = [];
  let yy = MakeCalendar.today.getFullYear();
  let mm = MakeCalendar.today.getMonth();
  let todayMonth = MakeCalendar.monList[mm];
  let currentMonth = MakeCalendar.monList[mm];
  let firstDay = MakeCalendar.getFirstDay(yy, mm);
  let lastDay = MakeCalendar.getLastDay(yy, mm);
  let setFirstDay = firstDay.getDay();

  const [stateCountDay, setStateCountDay] = useState(countDay);
  const [stateCurrentMonth, setStateCurrentMonth] = useState(currentMonth);
  const [stateYear, setStateYear] = useState(yy);

  const [clickedDate, setClickedDate] = useState();
  const [clickedMonth, setClickedMonth] = useState();
  const [currentCal, setCurrentCal] = useState(0);
  const [breakfastValue, setBreakfastValue] = useState(0);
  const [lunchValue, setLunchValue] = useState(0);
  const [dinnerValue, setDinnerValue] = useState(0);

  const onClickDate = (_clickDate, _clickmonth) => {
    setClickedDate(_clickDate);
    setClickedMonth(_clickmonth);
  };
  const onChangeBreakfast = (cal) => {
    setBreakfastValue(parseInt(cal));
  };
  const onChangeLunch = (cal) => {
    setLunchValue(parseInt(cal));
  };
  const onChangeDinner = (cal) => {
    setDinnerValue(parseInt(cal));
  };

  const clickPrevMonth = () => {
    let countDay = [];
    let prevMonth = MakeCalendar.prevMonth();
    let yy = prevMonth.getFullYear();
    let mm = prevMonth.getMonth();
    let currentMonth = MakeCalendar.monList[mm];

    let firstDay = MakeCalendar.getFirstDay(yy, mm);
    let lastDay = MakeCalendar.getLastDay(yy, mm);
    let setFirstDay = firstDay.getDay();

    handleCountDay(countDay, setFirstDay, lastDay);

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

    handleCountDay(countDay, setFirstDay, lastDay);

    setStateCountDay(countDay);
    setStateCurrentMonth(currentMonth);
    setStateYear(yy);
  };

  const handleCountDay = (_array, _firstDay, _lastDay) => {
    for (let j = 0; j < _firstDay; j++) {
      _array.push("");
    }
    for (let i = 1; i < _lastDay.getDate() + 1; i++) {
      _array.push(i);
    }
  };

  handleCountDay(countDay, setFirstDay, lastDay);

  useEffect(() => {
    setCurrentCal(breakfastValue + lunchValue + dinnerValue);
  });
  return (
    <section className={styles.container}>
      <Header auth={auth} />
      <div className={styles.dateContainer}>
        <ClickDate
          result={result}
          clickedDate={clickedDate}
          currentCal={currentCal}
          onChangeBreakfast={onChangeBreakfast}
          onChangeLunch={onChangeLunch}
          onChangeDinner={onChangeDinner}
          MakeCalendar={MakeCalendar}
          clickedMonth={clickedMonth}
        />
        <ShowDate
          onClickDate={onClickDate}
          result={result}
          currentCal={currentCal}
          todayMonth={todayMonth}
          clickPrevMonth={clickPrevMonth}
          clickNextMonth={clickNextMonth}
          stateCurrentMonth={stateCurrentMonth}
          stateYear={stateYear}
          stateCountDay={stateCountDay}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Calendar;
