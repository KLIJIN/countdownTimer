const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('sec');

const newYears = '2021-01-01 00:00:00';

function countdown() {
    const currentDate = new Date();  //Текущее время

    const newYearsDate = new Date(newYears); //Новый год

    const totalSeconds = (newYearsDate - currentDate )/ 1000; //разница в секундах
    const days = Math.floor(totalSeconds / 3600 / 24); //количество дней до даты
    const hours = Math.floor(totalSeconds / 3600) %24; //количество часов до даты
    const minutes = Math.floor(totalSeconds / 60) %60 ; //количество минут до даты
    const seconds =Math.floor(totalSeconds ) % 60; //количество часов до даты

   // console.log(days, " дней",  hours, " часов", minutes," минут", seconds);
   daysEl.innerText = days;
   hoursEl.innerText = formatTimeText(hours);
   minutesEl.innerText = formatTimeText(minutes);
   secondsEl.innerText = formatTimeText(seconds);


 
};
countdown();
setInterval(countdown, 1000);

function  formatTimeText(time) {
    return time <10 ? `0${time}`: `${time}`;
}