import React, { memo } from "react";
import styles from "./home_result.module.css";

const HomeResult = memo(({ result, handleResult, resultRef }) => {
  return (
    <div>
      <p>하루 칼로리 설정</p>
      <input
        type="number"
        value={result}
        onChange={handleResult}
        name="result"
      />
      <p className={styles.sub_p}>
        1kg을 감량하기 위해서는 7000칼로리를 줄여야 합니다.
      </p>
      <p className={styles.sub_p}>
        급격한 다이어트는 건강의 무리가 되므로 보통 일주일에 0.5kg을 권장합니다.
      </p>
      <p ref={resultRef} className={styles.resultSub}></p>
    </div>
  );
});

export default HomeResult;
