import React, { memo } from "react";
import ClickDateInput from "../clickDate_input/clickDate_input";
import LinkButton from "../clickData_linkBtn/clickDate_linkBtn";
import styles from "./clickDate.module.css";

const ClickDate = memo(
  ({
    result,
    clickedDate,
    currentCal,
    onChangeBreakfast,
    onChangeDinner,
    onChangeLunch,
    clickedMonth,
    clickResultBtn,
    formRef,
  }) => {
    const onClickResultBtn = (e) => {
      e.preventDefault();
      clickResultBtn(result - currentCal, clickedDate, clickedMonth);
      formRef.current.reset();
    };

    return (
      <div className={styles.container}>
        <form ref={formRef}>
          <h2 className={styles.day}>
            <span>{clickedMonth}</span>
            <span>{clickedDate}</span>
          </h2>
          <ClickDateInput value="아침" onChangeBreakfast={onChangeBreakfast} />
          <ClickDateInput value="점심" onChangeLunch={onChangeLunch} />
          <ClickDateInput value="저녁" onChangeDinner={onChangeDinner} />
          <button onClick={onClickResultBtn} className={styles.btn}>
            확인
          </button>
        </form>
        <h3>현재 칼로리: {isNaN(currentCal) ? 0 : currentCal}cal</h3>
        <h3 className={styles.h3}>하루 칼로리: {result}cal</h3>
        <LinkButton />
      </div>
    );
  }
);

export default ClickDate;
