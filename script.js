'use strict'

const whiteMode = document.getElementById('sun');
const darkMode = document.getElementById('moon');

whiteMode.addEventListener('click', function() {
  console.log('this is the white mode');
  window.alert('this is the white mode');
});

darkMode.addEventListener('click', function() {
  console.log('this is the dark mode');
  window.alert('this is the dark mode');
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