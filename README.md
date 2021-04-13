## :memo:프로젝트 소개
- 리액트로 구현한 다이어트 캘린더 입니다. 이 프로젝트는 다이어트를 할 때 자신의 신체에 맞게 칼로리를 정하고 날마다 기록하고 확인하고 싶어서 만들게 되었습니다.
- 로그인은 firebase로 구글,깃허브, 페이스북을 구현하였고 Database는 firebase에 realtime DB를 사용했습니다.
- 달력 부분은 API를 사용하지 않고 직접 구현하고 유동적으로 날짜가 변하도록 구현하였습니다.
## :bell:사용한 기술
- React(Create React App)
- firebase login
- firebase realtime DB
- gh-pages
- CSS module
## :camera:주요 기능
1. 로그인 
```jsx
 googleAuth() {
    return firebaseAuth.signInWithPopup(googleProvider).catch((err) => {
      console.log(err);
      return alert("다른계정을 이용해주세요");
    });
  }
  githubAuth(catchHistory) {
    return firebaseAuth
      .signInWithPopup(githubProvider).catch((err)=>{
         ...
      } //
  facebookAuth(catchHistory) {
    return firebaseAuth
      .signInWithPopup(facebookProvider).catch((err)=>{
         ...
      } //
  }     
```
2. 권장 칼로리 측정하기
``` jsx
const Home = memo(() => {
  ...
  ...
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
});
```
3. 달력만들기 
``` jsx
const MakeCalendar = {
  monList: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  dayList: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  today: new Date(),
  monForChange: new Date().getMonth(),
  getFirstDay: (yy, mm) => new Date(yy, mm, 1),
  getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
  nextMonth: function () {
    let d = new Date();
    d.setDate(1);
    d.setMonth(++this.monForChange);
    return d;
  },
  prevMonth: function () {
    let d = new Date();
    d.setDate(1);
    d.setMonth(--this.monForChange);
    return d;
  },
};

export default MakeCalendar;
```
4. firebase realtime DB
``` jsx
class Repository {
  async loadUser(userId, loadData) {
    await firebaseDatabase.ref(`date/${userId}`).on("value", (snapshot) => {
      const data = snapshot.val();
      loadData(data);
    });
  }
  async saveData(userId, date) {
    await firebaseDatabase.ref(`date/${userId}`).set(date);
  }
}
export default Repository;
```
## :exclamation:에러
- State 관리 : 앱의 크기가 커지면서 다른 컴포넌트에 있는 State를 사용하는 일이 많아졌습니다. 그래서 부모 컴포넌트에 모든 state를 끌어올려 놓고 관리했습니다. 하지만 부모컴포넌트가 너무 복잡해지므로 다음에는 상태를 관리하는 라이브러리를 사용할 것입니다.
- firebase realtime DB : 우선 앱을 처음에 계획할 때 로그인 부분은 구글, 카카오, 네이버를 구현하고 realtime DB에 토큰을 저장하려고 했습니다. 하지만 카카오, 네이버 로그인을 구현하고 Postman을 이용해서 토큰받는 것 까지 완료했습니다. 하지만 realtime DB에 정보를 저장하는 것에 있어서 배포하기 전 테스팅 모드일 때는 firebase에서 받은 것이 아닌 다른 토큰으로도 DB를 읽고 쓸 수 있었지만 배포할 때는 안전상의 이유로 firebase에서 받은 토큰이 아닌 것은 DB를 사용할 수 없었습니다. 그래서 아쉽지만 네이버와 카카오 로그인은 취소하고 facebook 과 github를 추가했습니다. 
- firebase account-exists-with-different-credential 에러 : 이메일 주소당 계정 1개를 사용 설정한 경우 다른 firebase사용자의 제공업체에 이미 존재하는 이메일을 사용하여 Facebook와 같은 제공업체에 로그인을 시도하면 오류가 발생합니다. 위에 에러가 발생할 시 기존에 존재하는 이메일을 받아서 그것으로 로그인을 합니다.
```jsx
  facebookAuth(catchHistory) {
    return firebaseAuth
      .signInWithPopup(facebookProvider)
      .catch(function (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
          firebaseAuth
            .fetchSignInMethodsForEmail(error.email)
            .then(function (providers) {
              if (providers[0] === "google.com") {
                firebaseAuth
                  .signInWithPopup(googleProvider)
                  .then(function (result) {
                    firebaseAuth
                      .signInWithCredential(result.credential)
                      .then((user) => {
                        catchHistory(user.user.uid);
                      });
                  });
              }
            });
        } else {
          alert("다른 계정을 이용해주세요");
        }
      });
  }
```
## :thumbsup:느낀점
1. 상태 관리의 필요성 : 상태를 관리하지 않고 꼬이니까 너무 복잡해집니다.
2. Postman을 사용하면 너무 편리하게 fetch를 할 수 있습니다.
3. Access_token과 Refresh_token에 대해서 이해하게 되었습니다. 로그인을 성공하면 토큰을 받습니다.acess_token은 로그인을 할 때 받는 토큰으로 이 토큰을 이용해서 로그인 정보를 받을 수 있습니다. Refresh_token은 유효기간이 access_token보다 길고 access_token이 만료되면 Refresh_token을 이용해 access_token을 재발급 받는 것입니다. 기존의 Access_token을 통한 인증 방싱긔 문제는 만일 제3자에게 토큰을 탈취당할 경우에 보안이 약하다는 것이 단점이었습니다. 하지만 두개의 토큰을 사용하면 안전하게 토큰을 관리할 수 있습니다.
4. 리렌더링을 방지하기 위해서 memo와 useCallback을 사용하려고 했으나 사용하기 위해서는 작은 단위로 컴포넌트가 구성이 되어야 편리하고 사용하는 것도 쉽지 않다.
 ## :link:링크
 <a href="https://hyebin26.github.io/react-dietCalendar/">https://hyebin26.github.io/react-dietCalendar/</a>
일러스트레이션:
<a href='https://www.freepik.com/vectors/sports'>Sports vector created by vectorjuice -www.freepik.com</a>

참고:
<a href='https://www.behance.net/gallery/101376559/Signup-Login-Screen-UI-Design'>https://www.behance.net/gallery/101376559/Signup-Login-Screen-UI-Design</a>
<a href='https://dribbble.com/shots/8110628-UI-Design-for-Calendar-Task-Manager/attachments/551289?mode=media'>https://dribbble.com/shots/8110628-UI-Design-for-Calendar-Task-Manager/attachments/551289?mode=media</a>
