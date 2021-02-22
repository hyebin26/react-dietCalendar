import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./home.module.css";

const Home = (props) => {
  const resultRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const signRef = useRef();
  const history = useHistory();

  const [height, setHeight] = useState("");
  const [commonWeight, setCommoonWeight] = useState();
  const [sign, setSign] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState();

  const handleHeight = (e) => {
    heightRef.current.innerText = `표준 체중은 ${
      (e.target.value - 100) * 0.9
    } 입니다.`;
    setCommoonWeight((e.target.value - 100) * 0.9);
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
    weightRef.current.innerText = `비만도는 ${
      ((e.target.value - commonWeight) / e.target.value) * 100
    }% 입니다. `;
  };
  const handleSign = (e) => {
    setSign(e.target.value);
    signRef.current.innerText = `하루 권장 칼로리는 ${
      commonWeight * e.target.value
    }칼로리 입니다.`;
  };
  const handleResult = (e) => {
    setResult(e.target.value);
  };
  const clickSubmit = (e) => {
    history.push({
      pathname: "/Calendar",
      state: { result: result },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Header />
        <form className={styles.itemForm}>
          <h3 className={styles.title}>하루 권장 칼로리 계산하기</h3>
          <div className={styles.itemContainer}>
            <p>키(cm) </p>
            <input
              type="number"
              value={height}
              onChange={handleHeight}
              name="height"
            />
            <p ref={heightRef}></p>
          </div>
          <div className={styles.itemContainer}>
            <p>몸무게(kg)</p>
            <input
              type="number"
              value={weight}
              onChange={handleWeight}
              name="weight"
            />
            <p ref={weightRef}></p>
          </div>
          <div className={styles.itemContainer}>
            <p>활동지수</p>
            <p className={styles.sign}>
              앉아서 주로 생활(일반사무,관리) 가벼운 움직임 25~30
            </p>
            <p className={styles.sign}>
              규칙적인 생활도 보통의 활동량을 가진 경우 30~35
            </p>
            <p className={styles.sign}>
              육체 노동 등 평소 신체 활동량이 많은 경우 40
            </p>
            <input
              type="number"
              value={sign}
              onChange={handleSign}
              name="sign"
            />
            <p ref={signRef}></p>
          </div>
          <div className={styles.itemContainer}>
            <p>원하는 하루 칼로리</p>
            <input
              type="number"
              value={result}
              onChange={handleResult}
              name="result"
            />
            <p className={styles.conference}>
              1kg을 감량하기 위해서는 7000칼로리를 줄여야 한다.
            </p>
            <p className={styles.conference}>
              급격한 다이어트는 건강의 무리가 되므로 보통 일주일에 0.5kg을
              권장한다.
            </p>
          </div>
          <button className={styles.btn} onClick={clickSubmit}>
            제출
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
