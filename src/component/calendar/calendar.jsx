import React from "react";
import { useLocation } from "react-router-dom";
import ClickDate from "../clickDate/clickDate";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./calendar.module.css";
import ShowDate from "../showDate/showDate";

const Calendar = (props) => {
  const location = useLocation();
  const result = location.state.result;

  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.dateContainer}>
        <ClickDate result={result} />
        <ShowDate />
      </div>
      <Footer />
    </section>
  );
};

export default Calendar;
