import React from "react";
import styles from "./makeDateList.module.css";

const MakeDateList = ({ resultCal }) => {
  return (
    <span
      className={styles.resultCalorie}
      style={{ color: resultCal < 0 ? "red" : "black" }}
    >
      {resultCal > 0 ? "+" + resultCal : resultCal}Cal
    </span>
  );
};

export default MakeDateList;
