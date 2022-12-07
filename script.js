'use strict'

/* VARIABLES */
const transformToWhiteMode = document.querySelector("#sun");
const transformToDarkMode = document.querySelector("#moon");

/* VARIABLES THAT ARE GOIN TO BE AFFECTED BY THE SWITCHING OF DARK/LIGH MODE */
const menuOptions = document.querySelectorAll(".options");
// const companySomeText = document.querySelector(".title-company");
// const companySomeDescriptionText = document.querySelector(".description");

transformToDarkMode.addEventListener("click", function () {
  for (let i = 0; i < menuOptions.length; i++) {

    // transformToDarkMode.src = `/Furnace/assets/images/icons/sun-mode-${1}.png`;
    // transformToDarkMode.src = `/Furnace/assets/images/icons/moon-mode-${1}.png`;
  }
});
console.log("teste");

for (let i = 0; i < menuOptions.length; i++) {
  console.log("ola");
  transformToDarkMode.addEventListener("click", function () {
    console.log("ola3");
    menuOptions[i].style.color = "black";
    menuOptions[i].style.border = "thick solid #0000FF";
  });
}