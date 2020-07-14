document.addEventListener('DOMContentLoaded', () => {
    const openCatalogButton = document.querySelector('.js-open-catalog');

    if (openCatalogButton) {
        const openCatalog = (e) => {
            document.querySelector('.js-menu-catalog').classList.add('active')
        }
        openCatalogButton.addEventListener('click', openCatalog);

        document.querySelector('.js-close-catalog').addEventListener('click', (e) => {
            e.currentTarget.closest('.menu__catalog').classList.remove('active')
        });
    }

    const popupScroll = document.querySelectorAll('.js-popup-scroll');

    if (popupScroll) {
        popupScroll.forEach((item) => {
            new Swiper(item, {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                mousewheel: true,
            });
        });
    };

})
