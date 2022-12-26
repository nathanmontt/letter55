'use strict'

/* VARIABLES */
const colorFir = "black";
const colorSec = "white";

//FOR THE IMAGES
const whiteMode = document.getElementById('sun');
const darkMode = document.getElementById('moon');

//FOR THE NAVIGATION BAR
/*----------------------------------------------------------*/
const linksMenuChanging = document.querySelectorAll('.links');
for (let i=0 ; i<linksMenuChanging.length ; i++) {
  whiteMode.addEventListener('click', function() {
    linksMenuChanging[i].style.color = colorSec;
    sun.src = `/letter55/assets/icons/sun-${2}.png`;
    moon.src = `/letter55/assets/icons/moon-${2}.png`;
  });
}

for (let j=0 ; j<linksMenuChanging.length ; j++) {
  darkMode.addEventListener('click', function() {
    linksMenuChanging[i].style.color = colorFir;
    sun.src = `/letter55/assets/icons/sun-${1}.png`;
    moon.src = `/letter55/assets/icons/moon-${1}.png`;
  });
}
/*----------------------------------------------------------*/

whiteMode.addEventListener('click', function() {
  // sun.src = `/letter55/assets/icons/sun-${1}.png`;
  // moon.src = `/letter55/assets/icons/moon-${1}.png`;
});

darkMode.addEventListener('click', function() {
});









// const conceptDescription = document.querySelector('.description');
// // RESIZING WINDOWN
// window.addEventListener('resize', function (event) {
//   if (this.window.innerWidth == 800) {
//     conceptDescription.textContent += " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit, deserunt tempora aperiam ipsum illum odit perspiciatis voluptas sequi temporibus placeat amet expedita fuga maxime ducimus quo odio.";
//   } else {
//     // conceptDescription.textContent
//   }
// });