const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar");
const navHome = document.querySelector(".home");
const navLogo = document.querySelector(".logo");
const navCTA = document.getElementById("navbar-cta");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navHome.classList.toggle("active");
  navLogo.classList.toggle("active");
  navCTA.classList.toggle("active");
});
