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

  const [clickedDate, setClickedDate] = useState();
  const [currentCal, setCurrentCal] = useState(0);
  const [breakfastValue, setBreakfastValue] = useState(0);
  const [lunchValue, setLunchValue] = useState(0);
  const [dinnerValue, setDinnerValue] = useState(0);

  const [stateClickDate, setStateClickDate] = useState([
    {
      date: 3,
      month: "2",
      currentCal: "500",
    },
    { date: 4, month: "2", currentCal: "900" },
  ]);

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
        />
        <ShowDate
          onClickDate={onClickDate}
          MakeCalendar={MakeCalendar}
          result={result}
          currentCal={currentCal}
          stateClickDate={stateClickDate}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Calendar;
