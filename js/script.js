/*================ Navbar section ===================*/
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function() {
    searchForm.classList.toggle('active')
}

const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('#login-btn');

loginBtn.onclick = function() {
    loginForm.classList.toggle('active')
}

const cartBox = document.querySelector('.cart-box');
const cartBtn = document.querySelector('#cart-btn');

cartBtn.onclick = function() {
    cartBox.classList.toggle('active')
}

/*================ Slider ===================*/ 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 20,
        },        
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        824:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024:{
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1324:{
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
  });