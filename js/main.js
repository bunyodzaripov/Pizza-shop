const menuBtn = document.querySelector("#menu-button");
const navMobile = document.querySelector("#nav-mobile");
const closeBtn = document.querySelector("#close-menu");
const navLinks = document.querySelectorAll(".cl-modal");

menuBtn.addEventListener("click", () => {
  navMobile.classList.remove("-right-300");
  navMobile.classList.add("right-0");
});

function closeMenu() {
  navMobile.classList.remove("right-0");
  navMobile.classList.add("-right-300");
}

closeBtn.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
