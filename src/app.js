/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".top-suite").innerHTML = random_top_suite;
  document.querySelector(".number").innerHTML = random_number();
  document.querySelector(".bottom-suite").innerHTML = random_top_suite;
};

let random_suite = () => {
  let suite = ["♠", "♥", "♣", "♦"];
  let random_number = Math.floor(Math.random() * suite.length);
  return suite[random_number];
};

let random_top_suite = random_suite();
let random_number = () => {
  let number = ["A", "K", "Q", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let random_number = Math.floor(Math.random() * number.length);
  return number[random_number];
};
