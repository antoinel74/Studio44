const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar");
const navHome = document.querySelector(".home");
const navContact = document.querySelector(".contacts");
const navServices = document.querySelector(".services");
const navCTA = document.getElementById("navbar-cta");

let navToggle = () => {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navHome.classList.toggle("active");
    navContact.classList.toggle("active");
    navCTA.classList.toggle("active");
    navServices.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((n) => {
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      navHome.classList.remove("active");
      navContact.classList.remove("active");
      navCTA.classList.remove("active");
      navServices.classList.remove("active");
    });
  });
};

export { navToggle };
