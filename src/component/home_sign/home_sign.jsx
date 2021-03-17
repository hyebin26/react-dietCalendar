import React, { memo } from "react";
import styles from "./home_sign.module.css";

const HomeSign = memo(({ sign, handleSign, signRef }) => {
  return (
    <div className={styles.itemContainer}>
      <p>활동지수</p>
      <p className={styles.sub_p}>
        앉아서 주로 생활(일반사무,관리) 가벼운 움직임 25~30
      </p>
      <p className={styles.sub_p}>
        규칙적인 생활도 보통의 활동량을 가진 경우 30~35
      </p>
      <p className={styles.sub_p}>
        육체 노동 등 평소 신체 활동량이 많은 경우 40
      </p>
      <input type="number" value={sign} onChange={handleSign} name="sign" />
      <p ref={signRef}></p>
    </div>
  );
});

export default HomeSign;
