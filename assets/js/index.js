import { $ } from "./selector.js";

function reloj() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  let beforeNoon = "AM";
  if (hours === 0) {
    hours = 12;
  }
  // let afterNoon= 'PM';
  if (hours > 12) {
    hours = hours - 12;
    beforeNoon = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // console.log(hours, minutes, seconds);
  let time = `${hours} : ${minutes} : ${seconds} ${beforeNoon}`;

  $(".reloj").innerText = time;
  $(".reloj").textContext = time;

  // setTimeout(reloj, 1000);
}

window.onload = function () {
  setInterval(reloj, 1000);
};
