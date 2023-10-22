// DOM elements selection
const hamburger = document.getElementById("hamburger");
const headerMobile = document.getElementById("header-mobile");
const close = document.getElementById("close");

// Function to open the menu
function openMenu() {
  headerMobile.classList.remove("menu-off");
  headerMobile.classList.add("menu-on");
}

// Function to close the menu
function closeMenu() {
  headerMobile.classList.remove("menu-on");
  headerMobile.classList.add("menu-off");
}

// Adds event handlers to elements
hamburger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);






