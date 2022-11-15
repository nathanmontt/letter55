'use strict'

/*VARIABLES*/
const openMenu = document.querySelector('.hamb-menu');
const optionsMenu = document.querySelectorAll('.options');

/*DARK/LIGHT MODE VARIABLES*/
const darkMode = document.getElementById('moon');
const lightMode = document.getElementById('sun');
// const darkMode = document.getElementById('dark-mode');
// const lightMode = document.getElementById('light-mode');
// const body = document.querySelector('body');
// const optionLinks = document.querySelectorAll('.menu-links')

/* OPENING THE HAMBURGER MENU OPTIONS */
for (let i=0 ; i<optionsMenu.length ; i++) {
  openMenu.addEventListener('click', function () {
    optionsMenu[i].classList.toggle('hidden');
  });
}

//SWITCH TO DARK MODE
darkMode.addEventListener('click', function () {
  console.log('oola');
});
// darkMode.addEventListener('click', function () {
  
  /* STYLING THE MODES */
  // darkMode.style.width = "2rem";
  // darkMode.style.height = "2rem";
  // darkMode.style.marginRight = "0.2rem";
  
//   for (let i=0 ; i<optionLinks.length ; i++) {
//     optionLinks[i].style.color = "white";
//     body.style.backgroundColor = "black";

//     darkMode.src = `/cozy/assets/images/icons/sun-mode-${2}.png`;
//     lightMode.src = `/cozy/assets/images/icons/moon-mode-${2}.png`;
//   }
// });

//SWITCH TO LIGHT MODE
lightMode.addEventListener('click', function () {
  let text = "hello tds!!!"
  console.log(text);
});
// lightMode.addEventListener('click', function () {
  
  /* STYLING THE MODES */
  // lightMode.style.width = "3rem";
  // lightMode.style.height = "3rem";
  // lightMode.style.marginRight = "0.5rem;";
  
  
//   for (let i=0 ; i<optionLinks.length ; i++) {
//     optionLinks[i].style.color = "black";

//     body.style.backgroundColor = "white";
//     darkMode.src = `/cozy/assets/images/icons/sun-mode-1.png`;
//     lightMode.src = `/cozy/assets/images/icons/moon-mode-1.png`;
//   }
// });

/* DARK MODE */
// for (let i=0 ; i<optionsMenu.length ; i++) {
//   console.log('teste');
//   btnOpenCloseMenuWhite.addEventListener('click', function () {
//     optionsMenu[i].classList.toggle('hidden');
//   });
// }