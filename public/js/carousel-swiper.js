var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    /* pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, */
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: count < 5 ? count : 5,
        spaceBetween: 50,
      },
    },
})