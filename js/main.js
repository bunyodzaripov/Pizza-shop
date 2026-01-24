const menuBtn = document.querySelector("#menu-button");
const navMobile = document.querySelector("#nav-mobile");
const closeBtn = document.querySelector("#close-menu");

menuBtn.addEventListener("click", () => {
  navMobile.classList.remove("-right-300");
  navMobile.classList.add("right-0");
});

closeBtn.addEventListener("click", () => {
  navMobile.classList.remove("right-0");
  navMobile.classList.add("-right-300");
});
