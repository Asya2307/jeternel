"use strict";document.addEventListener("DOMContentLoaded",function(e){var i=document.querySelectorAll(".js-special-slider");i&&i.forEach(function(e){new Swiper(e,{speed:1200,spaceBetween:150,slidesPerView:1,autoHeight:!0,loop:!0,navigation:{nextEl:".slider__nav-item--next",prevEl:".slider__nav-item--prev"},breakpoints:{768:{slidesPerView:3},1024:{slidesPerView:3}}})})});