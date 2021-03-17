import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import HomeHight from "../home_hight/home_hight";
import HomeResult from "../home_result/home_result";
import HomeSign from "../home_sign/home_sign";
import HomeWeight from "../home_weight/home_weight";
import styles from "./home.module.css";

const Home = ({ auth }) => {
  const heightRef = useRef();
  const weightRef = useRef();
  const signRef = useRef();
  const resultRef = useRef();
  const history = useHistory();
  const location = useLocation();

  const [height, setHeight] = useState("");
  const [commonWeight, setCommonWeight] = useState();
  const [sign, setSign] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState();

  const handleHeight = (e) => {
    if (e.target.value === "") {
      setHeight("");
      setCommonWeight();
      return (heightRef.current.innerText = "표준 체중은 0kg 입니다.");
    }
    heightRef.current.innerText = `표준 체중은 ${Math.round(
      (e.target.value - 100) * 0.9
    )} 입니다.`;
    setCommonWeight((e.target.value - 100) * 0.9);
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    if (commonWeight === undefined) {
      weightRef.current.innerText = "키를 먼저 입력해주세요 !";
      return false;
    } else if (e.target.value === "") {
      setWeight("");
      return (weightRef.current.innerText = "몸무게를 입력해주세요");
    }
    setWeight(e.target.value);
    weightRef.current.innerText = `비만도는 ${Math.round(
      ((e.target.value - commonWeight) / e.target.value) * 100
    )}% 입니다. `;
  };
  const handleSign = (e) => {
    if (commonWeight === undefined || "") {
      return (signRef.current.innerText = "키와 몸무게를 먼저 입력해주세요");
    } else if (e.target.value >= 51) {
      setSign();
      return (signRef.current.innerText = "활동지수를 다시 입력해주세요");
    }
    setSign(e.target.value);
    signRef.current.innerText = `하루 권장 칼로리는 ${
      commonWeight * e.target.value
    }칼로리 입니다.`;
  };
  const handleResult = (e) => {
    setResult(e.target.value);
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    if (result === undefined) {
      resultRef.current.innerText = "하루 칼로리를 입력해주세요 !";
      return false;
    }
    history.push({
      pathname: "/Calendar",
      state: { result: result, userId: location.state.userId },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Header />
        <form className={styles.itemForm}>
          <h3 className={styles.title}>하루 권장 칼로리 계산하기</h3>
          <HomeHight
            height={height}
            handleHeight={handleHeight}
            heightRef={heightRef}
          />
          <HomeWeight
            weight={weight}
            handleWeight={handleWeight}
            weightRef={weightRef}
          />
          <HomeSign sign={sign} handleSign={handleSign} signRef={signRef} />
          <HomeResult
            result={result}
            handleResult={handleResult}
            resultRef={resultRef}
          />
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
