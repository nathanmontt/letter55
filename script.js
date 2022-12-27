'use strict'

const colorFir = "#100d0d";
const colorLetter = "black";
const colorSec = "white";
const colorThi = "gray";

//VARIABLES FOR THE IMAGES
const whiteMode = document.getElementById('sun');
const darkMode = document.getElementById('moon');

/*-------------------------NAVIGATION BAR---------------------------------*/
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
    linksMenuChanging[j].style.color = colorLetter;
    sun.src = `/letter55/assets/icons/sun-${1}.png`;
    moon.src = `/letter55/assets/icons/moon-${1}.png`;
  });
}
/*----------------------------------------------------------*/


/*------------------------HERO SECTION----------------------------------*/
const heroTitleChanging = document.querySelector('.hero-title');
whiteMode.addEventListener('click', function() {
  heroTitleChanging.style.color = colorSec;
});

darkMode.addEventListener('click', function() {
  heroTitleChanging.style.color = colorLetter;
});
/*----------------------------------------------------------*/


/*------------------------CONCEPT SECTION----------------------------------*/
const main = document.querySelector('main');
const titleChanging = document.querySelector('.title');
const descriptionChanging = document.querySelector('.description');
const mainSectionChanging = document.querySelectorAll('.links-main-section');
const mainLinksChanging = document.querySelectorAll('.main-links');


/*------------------------MAIN-------------------------------*/
whiteMode.addEventListener('click', function() {
  main.style.backgroundColor = colorSec;
});

darkMode.addEventListener('click', function() {
  main.style.backgroundColor = colorFir;
});
/*----------------------------------------------------------*/


/*------------------------TITLE-------------------------------*/
whiteMode.addEventListener('click', function() {
  titleChanging.style.color = colorLetter;
});

darkMode.addEventListener('click', function() {
  titleChanging.style.color = colorSec;
});
/*----------------------------------------------------------*/


/*------------------------DESCRIPTION-------------------------------*/
whiteMode.addEventListener('click', function() {
  descriptionChanging.style.color = colorLetter;
});

darkMode.addEventListener('click', function() {
  descriptionChanging.style.color = colorSec;
});
/*----------------------------------------------------------*/


/*------------------------NUMBERS ON THE MAIN SECTION----------------------------*/
for (let i=0 ; i<mainSectionChanging.length ; i++) {
  whiteMode.addEventListener('click', function() {
    mainSectionChanging[i].style.color = colorThi;
  });
}

for (let j=0 ; j<mainSectionChanging.length ; j++) {
  darkMode.addEventListener('click', function() {
    mainSectionChanging[j].style.color = colorSec;
  });
}
/*----------------------------------------------------------*/


/*------------------------LINKS ON THE MAIN SECTION----------------------------*/
for (let i=0 ; i<mainLinksChanging.length ; i++) {
  whiteMode.addEventListener('click', function() {
    mainLinksChanging[i].style.color = colorLetter;
  });
}

for (let j=0 ; j<mainLinksChanging.length ; j++) {
  darkMode.addEventListener('click', function() {
    mainLinksChanging[j].style.color = colorSec;
  });
}
/*----------------------------------------------------------*/







// const conceptDescription = document.querySelector('.description');
// // RESIZING WINDOWN
// window.addEventListener('resize', function (event) {
//   if (this.window.innerWidth == 800) {
//     conceptDescription.textContent += " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit, deserunt tempora aperiam ipsum illum odit perspiciatis voluptas sequi temporibus placeat amet expedita fuga maxime ducimus quo odio.";
//   } else {
//     // conceptDescription.textContent
//   }
// });