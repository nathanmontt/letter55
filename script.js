'use strict'

/*VARIABLES*/
const openMenu = document.querySelector('.hamb-menu');
const optionsMenu = document.querySelectorAll('.options');
const logoCompany = document.getElementById('logo-company');

/*DARK/LIGHT MODE VARIABLES*/
const darkMode = document.getElementById('moon');
const lightMode = document.getElementById('sun');
const body = document.querySelector('body');
const links = document.querySelectorAll('.links')

/* OPENING THE HAMBURGER MENU OPTIONS */
for (let i=0 ; i<optionsMenu.length ; i++) {
  openMenu.addEventListener('click', function () {
    optionsMenu[i].classList.toggle('hidden');
  });
}

//SWITCH TO DARK MODE
darkMode.addEventListener('click', function () {
  body.style.backgroundColor = "white";
  darkMode.src = `/cozy/assets/images/icons/moon-mode-${1}.png`;
  lightMode.src = `/cozy/assets/images/icons/sun-mode-${1}.png`;
  logoCompany.src = `/cozy/assets/images/icons/staircase-logo-${1}.png`;
  openMenu.src = `/cozy/assets/images/icons/menu-hamb-${1}.png`;
  
  for (let i=0 ; i<links.length ; i++) {
    links[i].style.color = "black";
  }
});

//SWITCH TO LIGHT MODE
lightMode.addEventListener('click', function () {
  body.style.backgroundColor = "black";
  darkMode.src = `/cozy/assets/images/icons/moon-mode-${2}.png`;
  lightMode.src = `/cozy/assets/images/icons/sun-mode-${2}.png`;
  logoCompany.src = `/cozy/assets/images/icons/staircase-logo-${2}.png`;
  openMenu.src = `/cozy/assets/images/icons/menu-hamb-${2}.png`;
  
  for (let i=0 ; i<links.length ; i++) {
    links[i].style.color = "white";
  }
});