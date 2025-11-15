const Navlinks = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
menuOpenButton.addEventListener('click', () => {
    // toogle mobile menu visibility
    document.body.classList.toggle('show-mobile-menu');
});
menuCloseButton.addEventListener('click', () => menuOpenButton.click()
);
// close mobile menu on navlink click
Navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => menuOpenButton.click()
    );
});
//initialize swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});