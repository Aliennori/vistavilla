const hamburger= document.querySelector('#hamburger');
const navlink= document.querySelector('#navlink');

hamburger.addEventListener('click', () => {
  navlink.classList.toggle('nav-is-open');
   
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
  spaceBetween: 20,   
    direction: 'horizontal',    
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,   
      
    },    
   
  breakpoints: {
      // when window width is >= 640px
      320: {
          slidesPerView: 1,
        
      },
      
      960: {
          slidesPerView: 2,
    
      },
      1200: {
        slidesPerView: 3,
    
    }
  }
  
    
  });
  