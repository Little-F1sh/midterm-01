/*================ Navbar section ===================*/


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