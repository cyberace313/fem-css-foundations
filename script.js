const nav = document.querySelector(".nav");
const menu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close-icon");
const body = document.querySelector(".body");

menu.addEventListener("click", () => {
  nav.classList.add("nav-visible");
  close.style.display = "block";
  menu.style.display = "none";
  body.classList.add("body-no-scroll");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav-visible");
  close.style.display = "none";
  menu.style.display = "block";
  body.classList.remove("body-no-scroll");
});
    