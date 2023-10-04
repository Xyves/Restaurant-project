import "./input.css";
import navBar from "./nav-bar";
import createSection from "./mainSection.js";

const body = document.querySelector("body");
const container = document.querySelector(".container");

console.log("Does it work????");

document.body.onload = loadDom();
function loadDom() {
  navBar();
  createSection();
}
