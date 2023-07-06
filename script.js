const navButton = document.querySelector(".nav-button");
const navButtonImg = navButton.querySelector("img");
const mobileNav = document.querySelector(".header__nav--mobile");
const body = document.querySelector("body");

navButton.addEventListener("click", () => {
  const navOpen = "./images/menu-icon.svg";
  const navClose = "./images/menu-close.svg";
  const currentSrc = navButtonImg.getAttribute("src");
  currentSrc === navOpen
    ? navButtonImg.setAttribute("src", navClose)
    : navButtonImg.setAttribute("src", navOpen);
  mobileNav.classList.toggle("visible");
  body.classList.toggle("no-scroll");
})