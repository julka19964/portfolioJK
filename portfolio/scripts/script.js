// nav-bar mobile 
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

const mobileMenu = () => {
menu.classList.toggle('activeMenu')
burger.classList.toggle('exitMenu')

}
burger.addEventListener('click',mobileMenu)

// nav-bar scrolling && skills appear
const navBar = document.querySelector('.first');
const firstSection = document.querySelector('.spin').offsetTop;
const secSection = document.querySelector('.sectionTwo').offsetTop;
const circles = document.querySelectorAll('.circle');

window.onscroll = () => {
    if (window.pageYOffset >= firstSection) {
        navBar.classList.add('scroller');
    }
    else {
        navBar.classList.remove('scroller');
    }
    if (window.pageYOffset >= secSection) {
        circles.forEach(circle =>circle.classList.add('active'))
           } 
}

// formularz


// import axios from "axios.js";
// ...

// var config = {
//   method: 'get',
//   url: "https://rickandmortyapi.com/api/character",
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });