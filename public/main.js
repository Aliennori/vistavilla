//mobile navbar
const hamburger= document.querySelector('#hamburger');
const navlink= document.querySelector('#navlink');

hamburger.addEventListener('click', () => {
  navlink.classList.toggle('nav-is-open');
   
});

//swiper slides
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



  //scrollreveal
  const sr= ScrollReveal ({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,

  });
  
  sr.reveal('.heroText', {origin: 'top'});
  sr.reveal('.card', {distance: '100px', interval: 100});
  sr.reveal('.left', {origin: 'left'});
  sr.reveal('.right', {origin: 'right', delay: 800});
  sr.reveal('.testimonial', {delay: 800});
  sr.reveal('.testimonial-title');
  sr.reveal('.testimonial-slider', {delay: 1000});
  sr.reveal('.prop-title');
  sr.reveal('.prop-text', {delay: 800});
  sr.reveal('.prop-grid', {delay: 1000});
  sr.reveal('.stats');
  sr.reveal('.stat-item', {distance: '100px', interval: 100});
  sr.reveal('.article-title' );
  sr.reveal('.article-text', {delay:800});

  sr.reveal('.news-flex', {
    distance: '100px',
    interval: 100,
    delay: 1000,

  });
  sr.reveal('.action');
  sr.reveal('.action-title', {delay:800});
  sr.reveal('.action-text', {delay:800});
  sr.reveal('.action-btn', {delay:800});

  sr.reveal('.footer-item', {
    distance: '100px',
    interval: 100,
    delay: 1000,
  });
  sr.reveal('.copyright');


