var quizButton = document.querySelectorAll('.js-slide-button');

if (quizButton) {
    quizButton.forEach(function (item, index) {
        item.style.zIndex = quizButton.length - index;
    });
}