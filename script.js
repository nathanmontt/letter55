'use strict'

//VARIABLES
const btnOpenCloseMenu = document.querySelector('.menu-burger');
const optionsMenu = document.querySelectorAll('.options');

//DARK/LIGHT MODE
const switchToDarkMode = document.getElementById('dark-mode');
const switchToLigthMode = document.getElementById('light-mode');
const body = document.querySelector('body');
const optionLinks = document.querySelectorAll('.menu-links')

/* WHITE MODE */
for (let i=0 ; i<optionsMenu.length ; i++) {
  console.log('ola');
  btnOpenCloseMenu.addEventListener('click', function () {
    optionsMenu[i].classList.toggle('hidden');
  });
}

//SETTING TO SWITCH TO DARK MODE
switchToDarkMode.addEventListener('click', function () {
  body.style.backgroundColor = "black";
  
  for (let i=0 ; i<optionLinks.length ; i++) {
    console.log('teste 1');
    optionLinks[i].style.color = "white";
  }
});

//SETTING TO SWITCH TO LIGHT MODE
switchToLigthMode.addEventListener('click', function () {
  body.style.backgroundColor = "white";
  
  for (let i=0 ; i<optionLinks.length ; i++) {
    console.log('teste 2');
    optionLinks[i].style.color = "black";
  }
});

/* DARK MODE */
// for (let i=0 ; i<optionsMenu.length ; i++) {
//   console.log('teste');
//   btnOpenCloseMenuWhite.addEventListener('click', function () {
//     optionsMenu[i].classList.toggle('hidden');
//   });
// }