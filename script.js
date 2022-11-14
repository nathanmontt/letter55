'use strict'

//VARIABLES
const btnOpenCloseMenuDark = document.querySelector('.open-menu-burger-white-mode');
const btnOpenCloseMenuWhite = document.querySelector('.open-menu-burger-dark-mode');
const optionsMenu = document.querySelectorAll('.options');

//DARK/LIGHT MODE
const switchToDarkMode = document.getElementById('dark-mode-moon');
const switchToLigthMode = document.getElementById('light-mode-sun');
const body = document.querySelector('body');
const optionLinks = document.querySelectorAll('.menu-links')

/* WHITE MODE */
for (let i=0 ; i<optionsMenu.length ; i++) {
  console.log('ola');
  btnOpenCloseMenuDark.addEventListener('click', function () {
    optionsMenu[i].classList.toggle('hidden');
  });
}

switchDarkLigthMode.addEventListener('click', function () {
  body.style.backgroundColor = "black";
  
  for (let i=0 ; i<optionLinks.length ; i++) {
    console.log('opalele');
    optionLinks[i].style.color = "white";
  }
});

/* DARK MODE */
// for (let i=0 ; i<optionsMenu.length ; i++) {
//   console.log('teste');
//   btnOpenCloseMenuWhite.addEventListener('click', function () {
//     optionsMenu[i].classList.toggle('hidden');
//   });
// }