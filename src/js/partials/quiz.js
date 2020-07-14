const quizStep = document.querySelectorAll('.js-step');

if (quizStep) {
    quizStep.forEach((item, index) => {
        item.setAttribute('data-step', index+1);
    });

    quizStep[0].classList.add('active');

    const countSteps = quizStep.length

    
    
    const switcherNext = (_this, countTab) => {
        document.querySelector('.js-quiz-current').innerHTML = countTab + 1;
        document.querySelector('[data-tab="prev"]').removeAttribute('disabled');
        document.querySelector(`[data-step='${countTab + 1}']`).classList.add('active');
        // document.querySelector('.js-step-result').classList.add('active')
    }

    const switcherPrev = (_this, countTab) => {
        document.querySelector(`[data-step='${countTab - 1}']`).classList.add('active');
        document.querySelector('.js-quiz-current').innerHTML = countTab - 1;
        if (countTab - 1  == 1) {
            _this.setAttribute('disabled', true);
        }  
    };

    const stepButton = document.querySelectorAll('.js-btn');

    stepButton.forEach((item) => {
        item.addEventListener('click', (e) => {
            const _this = e.currentTarget;
            const direction = _this.getAttribute('data-tab');
            const countTab = parseInt(document.querySelector('.js-step.active').getAttribute('data-step'));
            document.querySelector('.js-step.active').classList.remove('active');
            direction === 'next' ? switcherNext(_this, countTab) : switcherPrev(_this, countTab);
        });
    });

}