const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar");
const navHome = document.querySelector(".home");
const navServices = document.querySelector(".services");
const navCTA = document.getElementById("navbar-cta");

let navToggle = () => {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navHome.classList.toggle("active");
    navServices.classList.toggle("active");
    navCTA.classList.toggle("active");
  });
};

export { navToggle };
