document.addEventListener('DOMContentLoaded', (e) => {
    const specialSlider = document.querySelectorAll('.js-special-slider');

    if (specialSlider) {
        specialSlider.forEach(function(item) {
                 new Swiper(item, {
                    speed: 1200,
                    spaceBetween: 150,
                    slidesPerView: 3,
                    autoHeight: true,
                    loop: true,
                    navigation: {
                        nextEl: ".slider__nav-item--next",
                        prevEl: ".slider__nav-item--prev"
                    }
                })
        })
    }
})
