'use strict'

const colorFir = "#100d0d";
const colorBackgorundFooter = "#dadada";
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


/*------------------------FOOTER 1st PART----------------------------*/
const footer = document.querySelector('footer');
const companyNameChanging = document.querySelector('.name-company');
const footerLinksChanging = document.querySelectorAll('.footer-links');
const politicsChanging = document.querySelector('.politics');
const privacyTermsChanging = document.getElementById('privacy');
const termsOfUseChanging = document.getElementById('use');
const titleFormsChanging = document.querySelector('.title-submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const btn = document.querySelector('button');

//FOOTER BACKGROUND PART
whiteMode.addEventListener('click', function() {
  footer.style.backgroundColor = colorLetter;
});

darkMode.addEventListener('click', function() {
  footer.style.backgroundColor = colorBackgorundFooter;
});


//LETTERS PART
whiteMode.addEventListener('click', function() {
  companyNameChanging.style.color = colorSec;
});

darkMode.addEventListener('click', function() {
  companyNameChanging.style.color = colorLetter;
});

//LINKS PART
for (let i=0 ; i<footerLinksChanging.length ; i++) {
  whiteMode.addEventListener('click', function() {
    footerLinksChanging[i].style.color = colorSec;

    footerLinksChanging[i].style.fontWeight = "200";
    footerLinksChanging[i].style.fontWeight = "200";
    footerLinksChanging[i].style.fontWeight = "200";
  });
}

for (let j=0 ; j<footerLinksChanging.length ; j++) {
  darkMode.addEventListener('click', function() {
    footerLinksChanging[j].style.color = colorLetter;

    footerLinksChanging[j].style.fontWeight = "400";
    footerLinksChanging[j].style.fontWeight = "400";
    footerLinksChanging[j].style.fontWeight = "400";
  });
}

//POLITICS PART
whiteMode.addEventListener('click', function() {
  politicsChanging.style.color = colorSec;
  privacyTermsChanging.style.color = colorSec;
  termsOfUseChanging.style.color = colorSec;

  politicsChanging.style.fontWeight = "200";
  privacyTermsChanging.style.fontWeight = "200";
  termsOfUseChanging.style.fontWeight = "200";
});

darkMode.addEventListener('click', function() {
  politicsChanging.style.color = colorLetter;
  privacyTermsChanging.style.color = colorLetter;
  termsOfUseChanging.style.color = colorLetter;

  politicsChanging.style.fontWeight = "400";
  privacyTermsChanging.style.fontWeight = "400";
  termsOfUseChanging.style.fontWeight = "400";
});
/*----------------------------------------------------------*/

/*------------------------FOOTER 1st PART----------------------------*/
const titleSubmitChanging = document.querySelector('.title-submit');
const nameChanging = document.getElementById('name');
const idChanging = document.getElementById('id');
const buttonChanging = document.getElementById('cta-btn');
/*----------------------------------------------------------*/