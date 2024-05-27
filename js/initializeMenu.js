export function initializeMenu() {
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
};
