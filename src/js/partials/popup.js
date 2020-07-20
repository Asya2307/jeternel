const popup = document.querySelectorAll('[data-open]');
const popupClose = document.querySelectorAll('.js-popup-close')
if (popup) {

    const openPopup = (e) => {
        let dataPopup = e.currentTarget.getAttribute('data-open');
        document.querySelector(`[data-popup='${dataPopup}']`).classList.add('active');
    }

    popup.forEach((item) => {
        item.addEventListener('click', openPopup)
    });

    popupClose.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.currentTarget.closest('.popup').classList.remove('active');
        } )
    })
}