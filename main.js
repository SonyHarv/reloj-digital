import "./src/css/style.css";
import { $ } from "./src/helpers/selector.js";

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

//Alarma

//function setAlarm

//function init alarm with sound
let alarmSound = new Audio();
alarmSound.src = "./src/assets/alarm.mp3";
const setAlarm = $("#setAlarm");

const initAlarm = () => {
  alarmSound.play();
};

//function setAlarm, addEventListener
setAlarm.addEventListener("click", (button) => {
  let ms = $("#inputHour").valueAsNumber;
  if (isNaN(ms)) {
    alert("Ingrese la hora especifica");
    return;
  }

  let timeNow = new Date(ms);
  let timeUtc = new Date(
    timeNow.getUTCFullYear(),
    timeNow.getUTCMonth(),
    timeNow.getUTCDate(),
    timeNow.getUTCHours(),
    timeNow.getUTCMinutes(),
    timeNow.getUTCSeconds()
  );
  let diffAlarm = timeUtc.getTime() - new Date().getTime();
  console.log(diffAlarm);
  if (diffAlarm <= 0) {
    alert("La fecha y hora introducida ya ha pasado");
    return;
  } else {
    setTimeout(initAlarm, diffAlarm);
    alert(`Se ha programado la alarma para el ${timeUtc}.`);

    setAlarm.innerText = "Cancel Alarm";
    console.log("Entro aqui can");
    console.log(button);
    // button.setAttribute("title", "cancelAlarm();");
    // TODO: CAMBIAR EL FORMATO DE FECHA Y HORA PARA EL ALERT AL PROGRAMAR LA ALARMA
  }
});

function cancelAlarm(button) {
  button.innerText = "Set Alarm";
  button.setAttribute("title", "Set Alarm;");
  console.log("Entro aqui cancelar alarma");
}

//function Snooze 5 min

const snoozeAlarm = $(".snoozeAlarm");

snoozeAlarm.addEventListener("click", () => {
  console.log("Entro aqui snoozeAlarm");
  stopAlarm();
  setTimeout(initAlarm, 300000);
});

//function stopAlarm

const stopAlarm = $(".stopAlarm");

stopAlarm.addEventListener("click", () => {
  // console.log("entro aqui stopALlarm");
  alarmSound.pause();
  initAlarm.currentTime = 0;
});
