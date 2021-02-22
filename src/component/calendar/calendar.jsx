import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ClickDate from "../clickDate/clickDate";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./calendar.module.css";
import ShowDate from "../showDate/showDate";
import MakeCalendar from "../../common/calendar";

const Calendar = (props) => {
  const location = useLocation();
  const result = location.state.result;
  const currentMonth = MakeCalendar.today.getMonth();
  const [clickedDate, setClickedDate] = useState();
  const [currentCal, setCurrentCal] = useState(0);
  const [breakfastValue, setBreakfastValue] = useState(0);
  const [lunchValue, setLunchValue] = useState(0);
  const [dinnerValue, setDinnerValue] = useState(0);

  const onClickDate = (e) => {
    setClickedDate(e.target.innerText);
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

  useEffect(() => {
    setCurrentCal(breakfastValue + lunchValue + dinnerValue);
  });
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.dateContainer}>
        <ClickDate
          result={result}
          clickedDate={clickedDate}
          currentCal={currentCal}
          onChangeBreakfast={onChangeBreakfast}
          onChangeLunch={onChangeLunch}
          onChangeDinner={onChangeDinner}
        />
        <ShowDate
          onClickDate={onClickDate}
          MakeCalendar={MakeCalendar}
          result={result}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Calendar;
