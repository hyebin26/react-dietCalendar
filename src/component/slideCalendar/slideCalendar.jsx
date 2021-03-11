import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useCallback } from "react";
import styles from "./slideCalendar.module.css";

const SlideCalendar = memo(
  ({ stateCurrentMonth, stateYear, clickNextMonth, clickPrevMonth }) => {
    return (
      <div className={styles.title}>
        <FontAwesomeIcon icon={faArrowLeft} onClick={clickPrevMonth} />
        <span>{stateCurrentMonth}</span>
        <span>{stateYear}</span>
        <FontAwesomeIcon icon={faArrowRight} onClick={clickNextMonth} />
      </div>
    );
  }
);

export default SlideCalendar;
