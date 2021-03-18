import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ClickDate from "../clickDate/clickDate";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./calendar.module.css";
import ShowDate from "../showDate/showDate";
import MakeCalendar from "../../common/calendar";

const Calendar = ({ repository, auth }) => {
  const location = useLocation();
  const formRef = useRef();
  const result = parseInt(location.state.result);
  const userId = localStorage.getItem("token");

  let countDay = [];
  const today = MakeCalendar.today.getDate();
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

  const [clickedDate, setClickedDate] = useState(parseInt(today));
  const [clickedMonth, setClickedMonth] = useState(currentMonth);

  const [breakfastValue, setBreakfastValue] = useState(0);
  const [lunchValue, setLunchValue] = useState(0);
  const [dinnerValue, setDinnerValue] = useState(0);
  const [currentCal, setCurrentCal] = useState(0);

  const [stateClickDate, setStateClickDate] = useState([]);

  const onClickDate = (_clickDate, _clickmonth) => {
    setClickedDate(parseInt(_clickDate));
    setClickedMonth(_clickmonth);
    setLunchValue(0);
    setBreakfastValue(0);
    setDinnerValue(0);
    formRef.current.reset();
  };
  const clickResultBtn = (res, _clickedDate, _clickedMonth) => {
    let filterItem = stateClickDate.filter(
      (obj) => obj.date !== _clickedDate || obj.month !== _clickedMonth
    );
    let concatItem = filterItem.concat({
      date: parseInt(clickedDate),
      month: clickedMonth,
      resultCal: res,
    });
    setStateClickDate(concatItem);
    setBreakfastValue(0);
    setLunchValue(0);
    setDinnerValue(0);

    repository.saveData(userId, concatItem);
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
    const prevMonth = MakeCalendar.prevMonth();

    countDay = [];
    yy = prevMonth.getFullYear();
    mm = prevMonth.getMonth();
    currentMonth = MakeCalendar.monList[mm];
    firstDay = MakeCalendar.getFirstDay(yy, mm);
    lastDay = MakeCalendar.getLastDay(yy, mm);
    setFirstDay = firstDay.getDay();

    handleCountDay(countDay, setFirstDay, lastDay);

    setStateCountDay(countDay);
    setStateCurrentMonth(currentMonth);
    setStateYear(yy);
  };
  const clickNextMonth = () => {
    const nextMonth = MakeCalendar.nextMonth();

    countDay = [];
    yy = nextMonth.getFullYear();
    mm = nextMonth.getMonth();
    currentMonth = MakeCalendar.monList[mm];
    firstDay = MakeCalendar.getFirstDay(yy, mm);
    lastDay = MakeCalendar.getLastDay(yy, mm);
    setFirstDay = firstDay.getDay();

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

  const saveUser = (data) => {
    if (data === null) return false;
    setStateClickDate(data);
  };

  useEffect(() => {
    setCurrentCal(breakfastValue + lunchValue + dinnerValue);
  }, [breakfastValue, lunchValue, dinnerValue]);

  useEffect(() => {
    repository.loadUser(userId, saveUser);
  }, [repository, userId]);

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
          clickedMonth={clickedMonth}
          clickResultBtn={clickResultBtn}
          formRef={formRef}
        />
        <ShowDate
          onClickDate={onClickDate}
          result={result}
          todayMonth={todayMonth}
          clickPrevMonth={clickPrevMonth}
          clickNextMonth={clickNextMonth}
          stateCurrentMonth={stateCurrentMonth}
          stateYear={stateYear}
          stateCountDay={stateCountDay}
          stateClickDate={stateClickDate}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Calendar;
