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
  day: ["일", "월", "화", "수", "목", "금", "토"],
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
