import "./input.css";
import generateAside from "./sidebar.js";
import createSection from "./mainSection.js";
import header from "./header.js";
const body = document.querySelector("body");
const container = document.querySelector(".container");

console.log("Does it work????");

document.body.onload = loadDom();
function loadDom() {
  header();
  generateAside();
  createSection();
}
