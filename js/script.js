document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.menu-nav__button');
  const menuNav = document.querySelector('.menu-nav');

  burgerMenu.addEventListener('click', function () {
      menuNav.classList.toggle('show');
  });

  document.body.addEventListener('click', function (event) {
      if (!menuNav.contains(event.target) && !burgerMenu.contains(event.target)) {
          menuNav.classList.remove('show');
          burgerMenu.checked = false; 
      }
  });
});

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
  },
  speed: 400,
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const accordionCredits = document.querySelectorAll('.credits dt');

function activeAccordion(event) {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}

accordionCredits.forEach((item) => {
  item.addEventListener('click', activeAccordion);
})
