

var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
      // when window width is >= 640px
      640: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
          slidesPerView: 3,
          spaceBetween: 30
      }
  }
});
