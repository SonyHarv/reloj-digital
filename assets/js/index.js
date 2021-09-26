import { $ } from "./selector.js";

function reloj() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  // console.log(hours, minutes, seconds);
  let time = `${hours} : ${minutes} : ${seconds}`;

  $(".reloj").innerText = time;
  $(".reloj").textContext = time;

  setTimeout(reloj, 500);
}

reloj();
