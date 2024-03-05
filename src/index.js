// index.js

import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadAbout from './loadAbout';


console.log("Printing stuff to the console");
loadHome();

function clearContent() {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
}

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", function() {
    clearContent();
    loadHome();
})

menuButton.addEventListener("click", function() {
    clearContent();
    loadMenu();
})

aboutButton.addEventListener("click", function() {
    clearContent();
    loadAbout();
})