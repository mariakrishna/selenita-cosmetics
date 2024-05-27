import { initializeMenu } from "./initializeMenu.js";
import { initializeAccordion } from './accordionCredits.js';
import { initializeModalLogin, handleLoginFormSubmit } from "./modalLogin.js";

const loginForm = document.getElementById("login-form");

document.addEventListener('DOMContentLoaded', () => {


if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    handleLoginFormSubmit(event, './user-page.html');
  })
  }

  const swiperContainer = document.querySelector('.swiper'); 
  if (swiperContainer) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true; 
    document.head.appendChild(script);

    script.onload = function() {
      
      initializeModalLogin(),
      initializeMenu()
      const swiper = new Swiper(swiperContainer, {
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
      }}
      initializeAccordion()});