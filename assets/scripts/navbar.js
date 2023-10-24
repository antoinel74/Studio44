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
    navCTA.classList.toggle("active");
    navServices.classList.toggle("active");
  });

  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  // Add click event listeners to each navigation link
  navLinks.forEach((n) => {
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      navHome.classList.remove("active");
      navCTA.classList.remove("active");
      navServices.classList.remove("active");
    });
  });
};

export { navToggle };
