(this.webpackJsonpreact_calendar=this.webpackJsonpreact_calendar||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={pColor:"#5d5d5d",loginWidth:"40rem",mainColor:"#00AB9F",borderColor:"rgb(224, 224, 224)",subColor:"#c5d632",container:"login_container__3-Cm1",loginCotaniner:"login_loginCotaniner__qXaQO",logo:"login_logo__3Aogi",imgBox:"login_imgBox__1xcEq",btnBox:"login_btnBox__1yMyp",btn:"login_btn__2v8Z3",naverLogin:"login_naverLogin__3QjxH"}},,,,,function(e,t,n){e.exports={loginWidth:"40rem",pColor:"#5d5d5d",mainColor:"#00AB9F",container:"home_container__3rE5B",box:"home_box__hRHlm",title:"home_title__32KQw",itemForm:"home_itemForm__37Qsk",btn:"home_btn__2M0q0",resultSub:"home_resultSub__1cx8-"}},,,,function(e,t,n){e.exports={sub_p:"home_sign_sub_p__3grym"}},function(e,t,n){e.exports={subColor:"#c5d632",mainColor:"#00AB9F",pColor:"#5d5d5d",font_white:"#f7f7f7",container:"clickDate_container__1RXuI",dayNumber:"clickDate_dayNumber__2Sz4h",itemContainer:"clickDate_itemContainer__1YQSo",btn:"clickDate_btn__3PLMo",h3:"clickDate_h3__1wvrF"}},,,,function(e,t,n){e.exports={sub_p:"home_result_sub_p__TyZPZ"}},function(e,t,n){e.exports={container:"showDate_container__3bqbt",dayContainer:"showDate_dayContainer__2Vspd",makeDateContainer:"showDate_makeDateContainer__6ijh9",calendarContainer:"showDate_calendarContainer__9TWt9"}},function(e,t,n){e.exports={mainColor:"#00AB9F",subColor:"#c5d632",date:"makeDate_date__1FVhl",title:"makeDate_title__QyPi8",cal:"makeDate_cal__LXnIm",today:"makeDate_today__18Ba_",clickDate:"makeDate_clickDate__2kd45"}},,,function(e,t,n){e.exports={mainColor:"#00AB9F",subColor:"#c5d632",font_white:"#f7f7f7",logo:"header_logo__3IWXu",singOutBtn:"header_singOutBtn__s7SIX"}},,,function(e,t,n){e.exports={dateContainer:"calendar_dateContainer__23pbX",container:"calendar_container__zPIEG"}},,,,,,function(e,t,n){e.exports={subColor:"#c5d632",font_white:"#f7f7f7",container:"footer_container__3Vr4i"}},function(e,t,n){e.exports={itemContainer:"clickDate_input_itemContainer__2V7qg"}},function(e,t,n){e.exports={mainColor:"#00AB9F",font_white:"#f7f7f7",link:"clickDate_linkBtn_link__3g6F2"}},,function(e,t,n){e.exports={resultCalorie:"makeDateList_resultCalorie__n69FK"}},function(e,t,n){e.exports={title:"slideCalendar_title__vxKQ3"}},,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(38),o=n.n(r),i=(n(51),n(13)),s=n(6),u=(n(52),n(12)),l=n.n(u),j=n(31),d=n.n(j),h=n(19),_=n(18),O=Object(c.memo)((function(e){var t=e.auth,n=Object(s.f)(),r=Object(c.useCallback)((function(){localStorage.getItem("kakaoToken")?(localStorage.removeItem("kakaoToken"),t.kakaoLogout()):t.signOut().then((function(){n.push("/")})).catch((function(e){return console.log(e)}))}),[t,n]);return Object(a.jsxs)("div",{className:d.a.logo,children:[t&&Object(a.jsx)("button",{className:d.a.singOutBtn,onClick:r,children:"Sign Out"}),Object(a.jsx)(_.a,{icon:h.c}),Object(a.jsx)("span",{children:"Diet Calendar"})]})})),b=function(e){var t=e.auth,n=Object(s.f)(),r=Object(s.g)(),o=Object(c.useRef)(),i=Object(c.useCallback)((function(e){n.push({pathname:"/Home",state:{userId:e}})}),[n]),u=Object(c.useCallback)((function(){if(r.hash){var e=r.hash.split("=")[1].split("&")[0];localStorage.setItem("naver_token",e)}}),[r.hash]);return Object(c.useEffect)((function(){t.initializeNaverLogin(),u()}),[t,u]),Object(c.useEffect)((function(){t.onAuthChange((function(e){e&&i(e.uid)}))}),[t,i]),Object(c.useEffect)((function(){var e=new URLSearchParams(r.search).get("code");if(null===e)return!1;t.fetchToken(e).then((function(e){return localStorage.setItem("kakaoToken",e.id),i(e.id)}))}),[t,r.search,i]),Object(c.useEffect)((function(){var e=localStorage.getItem("naver_token");e&&t.fetchNaverToken(e).then((function(e){return console.log(e)}))}),[t]),Object(a.jsx)("section",{className:l.a.container,children:Object(a.jsxs)("div",{className:l.a.loginCotaniner,children:[Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:l.a.imgBox,children:Object(a.jsx)("img",{src:"./img/1.jpg",alt:"workout"})}),Object(a.jsxs)("div",{className:l.a.btnBox,children:[Object(a.jsx)("button",{onClick:function(){t.googleAuth().then((function(e){return i(e.user.uid)}))},className:l.a.btn,children:"Google"}),Object(a.jsx)("button",{onClick:function(e){t.loginKakao()},className:l.a.btn,children:"Kakao"}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),o.current.firstChild.click()},className:l.a.btn,children:"Naver"}),Object(a.jsx)("div",{id:"naverIdLogin",ref:o,onClick:function(e){e.preventDefault()},className:l.a.naverLogin})]})]})})},f=n(7),m=n(40),C=n.n(m),v=Object(c.memo)((function(e){return Object(a.jsx)("div",{className:C.a.container,children:Object(a.jsx)("span",{children:"Footer"})})})),g=Object(c.memo)((function(e){var t=e.height,n=e.handleHeight,c=e.heightRef;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"\ud0a4(cm) "}),Object(a.jsx)("input",{type:"number",value:t||"",onChange:n,name:"height"}),Object(a.jsx)("p",{ref:c})]})})),p=n(26),x=n.n(p),S=Object(c.memo)((function(e){var t=e.result,n=e.handleResult,c=e.resultRef;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"\ud558\ub8e8 \uce7c\ub85c\ub9ac \uc124\uc815"}),Object(a.jsx)("input",{type:"number",value:t||"",onChange:n,name:"result"}),Object(a.jsx)("p",{className:x.a.sub_p,children:"1kg\uc744 \uac10\ub7c9\ud558\uae30 \uc704\ud574\uc11c\ub294 7000\uce7c\ub85c\ub9ac\ub97c \uc904\uc5ec\uc57c \ud569\ub2c8\ub2e4."}),Object(a.jsx)("p",{className:x.a.sub_p,children:"\uae09\uaca9\ud55c \ub2e4\uc774\uc5b4\ud2b8\ub294 \uac74\uac15\uc758 \ubb34\ub9ac\uac00 \ub418\ubbc0\ub85c \ubcf4\ud1b5 \uc77c\uc8fc\uc77c\uc5d0 0.5kg\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."}),Object(a.jsx)("p",{ref:c,className:x.a.resultSub})]})})),k=n(21),D=n.n(k),E=Object(c.memo)((function(e){var t=e.sign,n=e.handleSign,c=e.signRef;return Object(a.jsxs)("div",{className:D.a.itemContainer,children:[Object(a.jsx)("p",{children:"\ud65c\ub3d9\uc9c0\uc218"}),Object(a.jsx)("p",{className:D.a.sub_p,children:"\uc549\uc544\uc11c \uc8fc\ub85c \uc0dd\ud65c(\uc77c\ubc18\uc0ac\ubb34,\uad00\ub9ac) \uac00\ubcbc\uc6b4 \uc6c0\uc9c1\uc784 25~30"}),Object(a.jsx)("p",{className:D.a.sub_p,children:"\uaddc\uce59\uc801\uc778 \uc0dd\ud65c\ub3c4 \ubcf4\ud1b5\uc758 \ud65c\ub3d9\ub7c9\uc744 \uac00\uc9c4 \uacbd\uc6b0 30~35"}),Object(a.jsx)("p",{className:D.a.sub_p,children:"\uc721\uccb4 \ub178\ub3d9 \ub4f1 \ud3c9\uc18c \uc2e0\uccb4 \ud65c\ub3d9\ub7c9\uc774 \ub9ce\uc740 \uacbd\uc6b0 40"}),Object(a.jsx)("input",{type:"number",value:t,onChange:n,name:"sign"}),Object(a.jsx)("p",{ref:c})]})})),T=Object(c.memo)((function(e){var t=e.weight,n=e.handleWeight,c=e.weightRef;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"\ubab8\ubb34\uac8c(kg)"}),Object(a.jsx)("input",{type:"number",value:t,onChange:n,name:"weight"}),Object(a.jsx)("p",{ref:c})]})})),R=n(17),A=n.n(R),y=Object(c.memo)((function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),o=Object(s.f)(),i=Object(s.g)(),u=Object(c.useState)(""),l=Object(f.a)(u,2),j=l[0],d=l[1],h=Object(c.useState)(),_=Object(f.a)(h,2),b=_[0],m=_[1],C=Object(c.useState)(),p=Object(f.a)(C,2),x=p[0],k=p[1],D=Object(c.useState)(),R=Object(f.a)(D,2),y=R[0],N=R[1],P=Object(c.useState)(),K=Object(f.a)(P,2),L=K[0],F=K[1];return Object(c.useEffect)((function(){i.state&&localStorage.setItem("token",i.state.userId)})),Object(a.jsx)("div",{className:A.a.container,children:Object(a.jsxs)("div",{className:A.a.box,children:[Object(a.jsx)(O,{}),Object(a.jsxs)("form",{className:A.a.itemForm,children:[Object(a.jsx)("h3",{className:A.a.title,children:"\ud558\ub8e8 \uad8c\uc7a5 \uce7c\ub85c\ub9ac \uacc4\uc0b0\ud558\uae30"}),Object(a.jsx)(g,{height:j,handleHeight:function(t){if(""===t.target.value)return d(""),m(),e.current.innerText="\ud45c\uc900 \uccb4\uc911\uc740 0kg \uc785\ub2c8\ub2e4.";e.current.innerText="\ud45c\uc900 \uccb4\uc911\uc740 ".concat(Math.round(.9*(t.target.value-100))," \uc785\ub2c8\ub2e4."),m(.9*(t.target.value-100)),d(t.target.value)},heightRef:e}),Object(a.jsx)(T,{weight:y,handleWeight:function(e){return void 0===b?(t.current.innerText="\ud0a4\ub97c \uba3c\uc800 \uc785\ub825\ud574\uc8fc\uc138\uc694 !",!1):""===e.target.value?(N(""),t.current.innerText="\ubab8\ubb34\uac8c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"):(N(e.target.value),void(t.current.innerText="\ube44\ub9cc\ub3c4\ub294 ".concat(Math.round((e.target.value-b)/e.target.value*100),"% \uc785\ub2c8\ub2e4. ")))},weightRef:t}),Object(a.jsx)(E,{sign:x,handleSign:function(e){return void 0===b?n.current.innerText="\ud0a4\uc640 \ubab8\ubb34\uac8c\ub97c \uba3c\uc800 \uc785\ub825\ud574\uc8fc\uc138\uc694":e.target.value>=51?(k(),n.current.innerText="\ud65c\ub3d9\uc9c0\uc218\ub97c \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694"):(k(e.target.value),void(n.current.innerText="\ud558\ub8e8 \uad8c\uc7a5 \uce7c\ub85c\ub9ac\ub294 ".concat(b*e.target.value,"\uce7c\ub85c\ub9ac \uc785\ub2c8\ub2e4.")))},signRef:n}),Object(a.jsx)(S,{result:L,handleResult:function(e){F(e.target.value)},resultRef:r}),Object(a.jsx)("button",{className:A.a.btn,onClick:function(e){if(e.preventDefault(),void 0===L)return r.current.innerText="\ud558\ub8e8 \uce7c\ub85c\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694 !",!1;o.push({pathname:"/Calendar",state:{result:L}})},children:"\uc81c\ucd9c"})]}),Object(a.jsx)(v,{})]})})})),N=n(41),P=n.n(N),K=Object(c.memo)((function(e){var t=e.value,n=e.onChangeDinner,c=e.onChangeBreakfast,r=e.onChangeLunch;return Object(a.jsxs)("div",{className:P.a.itemContainer,children:[Object(a.jsxs)("span",{children:[t,"(cal): "]}),Object(a.jsx)("input",{type:"number",onChange:function(e){"\uc544\uce68"===t?c(e.target.value):"\uc810\uc2ec"===t?r(e.target.value):n(e.target.value)},name:"Dinner"})]})})),L=n(42),F=n.n(L),w=Object(c.memo)((function(){return Object(a.jsx)(i.b,{to:"/Home",className:F.a.link,children:"\ud558\ub8e8 \uce7c\ub85c\ub9ac \uc124\uc815\ud558\uae30"})})),I=n(22),B=n.n(I),H=Object(c.memo)((function(e){var t=e.result,n=e.clickedDate,c=e.currentCal,r=e.onChangeBreakfast,o=e.onChangeDinner,i=e.onChangeLunch,s=e.clickedMonth,u=e.clickResultBtn,l=e.formRef;return Object(a.jsxs)("div",{className:B.a.container,children:[Object(a.jsxs)("form",{ref:l,children:[Object(a.jsxs)("h2",{className:B.a.day,children:[Object(a.jsx)("span",{children:s}),Object(a.jsx)("span",{children:n})]}),Object(a.jsx)(K,{value:"\uc544\uce68",onChangeBreakfast:r}),Object(a.jsx)(K,{value:"\uc810\uc2ec",onChangeLunch:i}),Object(a.jsx)(K,{value:"\uc800\ub141",onChangeDinner:o}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),u(t-c,n,s),l.current.reset()},className:B.a.btn,children:"\ud655\uc778"})]}),Object(a.jsxs)("h3",{children:["\ud604\uc7ac \uce7c\ub85c\ub9ac: ",isNaN(c)?0:c,"cal"]}),Object(a.jsxs)("h3",{className:B.a.h3,children:["\ud558\ub8e8 \uce7c\ub85c\ub9ac: ",t,"cal"]}),Object(a.jsx)(w,{})]})})),W=n(34),M=n.n(W),U=n(27),V=n.n(U),Y=n(28),z=n.n(Y),Q=n(43),J=n.n(Q),X=n(44),q=n.n(X),G=Object(c.memo)((function(e){var t=e.resultCal;return Object(a.jsxs)("span",{className:q.a.resultCalorie,style:{color:t<0?"red":"black"},children:[t>0?"+"+t:t,"Cal"]})})),Z=Object(c.memo)((function(e){var t=e.date,n=e.onClickDate,c=e.stateCurrentMonth,r=e.todayMonth,o=e.stateClickDate,i=c===r&&(new Date).getDate();return Object(a.jsxs)("li",{className:z.a.date,children:[Object(a.jsx)("p",{className:J()(z.a.title,i===t&&z.a.today),onClick:function(e){n(e.target.innerText,c)},children:t}),o.map((function(e,n){return e.date===t&&e.month===c&&Object(a.jsx)(G,{resultCal:e.resultCal},n)}))]})})),$=n(45),ee=n.n($),te=Object(c.memo)((function(e){var t=e.stateCurrentMonth,n=e.stateYear,c=e.clickNextMonth,r=e.clickPrevMonth;return Object(a.jsxs)("div",{className:ee.a.title,children:[Object(a.jsx)(_.a,{icon:h.a,onClick:r}),Object(a.jsx)("span",{children:t}),Object(a.jsx)("span",{children:n}),Object(a.jsx)(_.a,{icon:h.b,onClick:c})]})})),ne=Object(c.memo)((function(e){var t=e.onClickDate,n=e.result,c=e.clickPrevMonth,r=e.clickNextMonth,o=e.stateCurrentMonth,i=e.stateYear,s=e.todayMonth,u=e.stateCountDay,l=e.stateClickDate;return Object(a.jsxs)("div",{className:V.a.container,children:[Object(a.jsx)(te,{stateCurrentMonth:o,stateYear:i,clickNextMonth:r,clickPrevMonth:c}),Object(a.jsxs)("ul",{className:V.a.dayContainer,children:[Object(a.jsx)("li",{children:"\uc77c"}),Object(a.jsx)("li",{children:"\uc6d4"}),Object(a.jsx)("li",{children:"\ud654"}),Object(a.jsx)("li",{children:"\uc218"}),Object(a.jsx)("li",{children:"\ubaa9"}),Object(a.jsx)("li",{children:"\uae08"}),Object(a.jsx)("li",{children:"\ud1a0"})]}),Object(a.jsx)("ul",{className:V.a.makeDateContainer,children:u.map((function(e,c){return Object(a.jsx)(Z,{date:e,onClickDate:t,stateCurrentMonth:o,result:n,todayMonth:s,stateClickDate:l},c)}))})]})})),ae={monList:["January","February","March","April","May","June","July","August","September","October","November","December"],dayList:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],today:new Date,monForChange:(new Date).getMonth(),getFirstDay:function(e,t){return new Date(e,t,1)},getLastDay:function(e,t){return new Date(e,t+1,0)},nextMonth:function(){var e=new Date;return e.setDate(1),e.setMonth(++this.monForChange),e},prevMonth:function(){var e=new Date;return e.setDate(1),e.setMonth(--this.monForChange),e}},ce=function(e){var t=e.repository,n=e.auth,r=Object(s.g)(),o=Object(c.useRef)(),i=parseInt(r.state.result),u=localStorage.getItem("token"),l=[],j=ae.today.getDate(),d=ae.today.getFullYear(),h=ae.today.getMonth(),_=ae.monList[h],b=ae.monList[h],m=ae.getFirstDay(d,h),C=ae.getLastDay(d,h),g=m.getDay(),p=Object(c.useState)(l),x=Object(f.a)(p,2),S=x[0],k=x[1],D=Object(c.useState)(b),E=Object(f.a)(D,2),T=E[0],R=E[1],A=Object(c.useState)(d),y=Object(f.a)(A,2),N=y[0],P=y[1],K=Object(c.useState)(parseInt(j)),L=Object(f.a)(K,2),F=L[0],w=L[1],I=Object(c.useState)(b),B=Object(f.a)(I,2),W=B[0],U=B[1],V=Object(c.useState)(0),Y=Object(f.a)(V,2),z=Y[0],Q=Y[1],J=Object(c.useState)(0),X=Object(f.a)(J,2),q=X[0],G=X[1],Z=Object(c.useState)(0),$=Object(f.a)(Z,2),ee=$[0],te=$[1],ce=Object(c.useState)(0),re=Object(f.a)(ce,2),oe=re[0],ie=re[1],se=Object(c.useState)([]),ue=Object(f.a)(se,2),le=ue[0],je=ue[1],de=function(e,t,n){for(var a=0;a<t;a++)e.push("");for(var c=1;c<n.getDate()+1;c++)e.push(c)};de(l,g,C);var he=function(e){if(null===e)return!1;je(e)};return Object(c.useEffect)((function(){ie(z+q+ee)}),[z,q,ee]),Object(c.useEffect)((function(){t.loadUser(u,he)}),[t,u]),Object(a.jsxs)("section",{className:M.a.container,children:[Object(a.jsx)(O,{auth:n}),Object(a.jsxs)("div",{className:M.a.dateContainer,children:[Object(a.jsx)(H,{result:i,clickedDate:F,currentCal:oe,onChangeBreakfast:function(e){Q(parseInt(e))},onChangeLunch:function(e){G(parseInt(e))},onChangeDinner:function(e){te(parseInt(e))},clickedMonth:W,clickResultBtn:function(e,n,a){var c=le.filter((function(e){return e.date!==n||e.month!==a})).concat({date:parseInt(F),month:W,resultCal:e});je(c),Q(0),G(0),te(0),t.saveData(u,c)},formRef:o}),Object(a.jsx)(ne,{onClickDate:function(e,t){w(parseInt(e)),U(t),G(0),Q(0),te(0),o.current.reset()},result:i,todayMonth:_,clickPrevMonth:function(){var e=ae.prevMonth();l=[],d=e.getFullYear(),h=e.getMonth(),b=ae.monList[h],m=ae.getFirstDay(d,h),C=ae.getLastDay(d,h),g=m.getDay(),de(l,g,C),k(l),R(b),P(d)},clickNextMonth:function(){var e=ae.nextMonth();l=[],d=e.getFullYear(),h=e.getMonth(),b=ae.monList[h],m=ae.getFirstDay(d,h),C=ae.getLastDay(d,h),g=m.getDay(),de(l,g,C),k(l),R(b),P(d)},stateCurrentMonth:T,stateYear:N,stateCountDay:S,stateClickDate:le})]}),Object(a.jsx)(v,{})]})};var re=function(e){var t=e.auth,n=e.repository;return Object(a.jsx)(i.a,{basename:"/react-dietCalendar",children:Object(a.jsxs)(s.c,{children:[Object(a.jsx)(s.a,{exact:!0,path:"/",children:Object(a.jsx)(b,{auth:t,repository:n})}),Object(a.jsx)(s.a,{path:"/Home",children:Object(a.jsx)(y,{auth:t})}),Object(a.jsx)(s.a,{path:"/Calendar",children:Object(a.jsx)(ce,{repository:n,auth:t})})]})})},oe=n(9),ie=n.n(oe),se=n(14),ue=n(24),le=n(25),je=n(23),de=(n(60),n(62),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_AUTH,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID});je.a.initializeApp(de);var he=je.a.auth(),_e=je.a.database(),Oe=new je.a.auth.GoogleAuthProvider,be=function(){function e(){Object(ue.a)(this,e)}return Object(le.a)(e,[{key:"loadUser",value:function(){var e=Object(se.a)(ie.a.mark((function e(t,n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e.ref("".concat(t,"/date")).on("value",(function(e){var t=e.val();n(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"saveData",value:function(){var e=Object(se.a)(ie.a.mark((function e(t,n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e.ref("".concat(t,"/date")).set(n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteData",value:function(e,t){_e.ref("".concat(e,"/date/")).remove(t)}},{key:"updateDate",value:function(e,t){_e.ref("".concat(e,"/date/")).update(t)}}]),e}(),fe=window.naver,me=window.Kakao,Ce=function(){function e(){Object(ue.a)(this,e)}return Object(le.a)(e,[{key:"googleAuth",value:function(){var e=Oe;return he.signInWithPopup(e)}},{key:"loginKakao",value:function(){me.Auth.authorize({redirectUri:Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_KAKAO_URL})}},{key:"fetchToken",value:function(){var e=Object(se.a)(ie.a.mark((function e(t){var n;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",redirect:"follow"},e.next=3,fetch("https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_KAKAO_KEY,"&redirect_uri=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_KAKAO_URL,"&code=").concat(t),n).then((function(e){return e.json()})).then((function(e){return fetch("https://kapi.kakao.com/v2/user/me",{method:"GET",headers:{Authorization:"Beaer ".concat(e.access_token)},redirect:"follow"})})).then((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"kakaoLogout",value:function(){var e=Object(se.a)(ie.a.mark((function e(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("kauth.kakao.com/oauth/logout?client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_KAKAO_KEY,"&logout_redirect_uri=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_KAKAO_URL));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"initializeNaverLogin",value:function(){new fe.LoginWithNaverId({clientId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NAVER_ID,callbackUrl:Object({NODE_ENV:"production",PUBLIC_URL:"/react-dietCalendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NAVER_URL,isPopup:!1,loginButton:{color:"green",type:1,height:30},callbackHandlke:!0}).init()}},{key:"fetchNaverToken",value:function(){var e=Object(se.a)(ie.a.mark((function e(t){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://openapi.naver.com/v1/nid/me",{method:"GET",headers:{Authorization:"Bearer ".concat(t)},redirect:"follow"}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){return he.signOut()}},{key:"onAuthChange",value:function(e){he.onAuthStateChanged((function(t){e(t)}))}}]),e}(),ve=new be,ge=new Ce;o.a.render(Object(a.jsx)(re,{auth:ge,repository:ve}),document.getElementById("root"))}],[[65,1,2]]]);
//# sourceMappingURL=main.e58cf427.chunk.js.map