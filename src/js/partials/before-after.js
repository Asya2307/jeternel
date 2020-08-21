

   


    let beforeAfterElements = document.querySelectorAll(".js-before-after-container");

    window.addEventListener("load", function(){
        if(beforeAfterElements){
            calculateBeforeAfter();
            window.addEventListener("resize", updateBeforeAfter);
        };
    })

    function updateBeforeAfter(){

        calculateBeforeAfter("recalc");
    };

    function calculateBeforeAfter(recalcCheck){
        console.log(1)
        for(let i = 0; i < beforeAfterElements.length; i++){
            let overlay = beforeAfterElements[i].querySelector(".js-before-after-overlay");
            if(overlay){
                beforeAfterElements[i].overlay = overlay;

                beforeAfterElements[i].offset = beforeAfterElements[i].getBoundingClientRect().left - 8;

                beforeAfterElements[i].width = beforeAfterElements[i].getBoundingClientRect().right - beforeAfterElements[i].getBoundingClientRect().left;

                beforeAfterElements[i].height = (window.pageYOffset + beforeAfterElements[i].getBoundingClientRect().bottom) - (window.pageYOffset + beforeAfterElements[i].getBoundingClientRect().top);

                beforeAfterElements[i].step = Math.round(beforeAfterElements[i].width / 100);

                beforeAfterElements[i].skewCompensation = beforeAfterElements[i].height / 20;
                if(!recalcCheck){
                    beforeAfterElements[i].addEventListener("mouseenter", addMouseMoveListener);
                    beforeAfterElements[i].addEventListener("mouseleave", resetOverlayWidth);
                };
            };
        };
    };

    function resetOverlayWidth(){
        clearInterval(widthChange);
        this.overlay.removeAttribute("style");
        this.removeEventListener("mousemove", calcOverlayWidth);
        currentWidth = 0;
        neededWidth = 0;
    };

    let currentWidth = 0;
    let neededWidth = 0;
    let widthChange;

    function addMouseMoveListener(){
        if(document.documentElement.clientWidth > 1283){            
            let overlay = this.overlay;
            
            overlay.style.transition = "none";
            widthChange = setInterval(function(){
                
                if(currentWidth < neededWidth){
                    currentWidth = currentWidth + 1;
                    overlay.style.width = currentWidth + "%";
                }else if(currentWidth > neededWidth){
                    currentWidth = currentWidth - 1;
                    overlay.style.width = currentWidth + "%";
                };
            }, 5)
            this.addEventListener("mousemove", calcOverlayWidth);
        };
    };

    function calcOverlayWidth(){
        neededWidth = Math.round((event.clientX - this.offset) / this.step + this.skewCompensation);
    };

    var sliderBeforeAfter = new Swiper('.js-before-after-slider', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 150,
        navigation: {
            nextEl: '.slider__nav--before-after .slider__nav-item--next',
            prevEl: '.slider__nav--before-after .slider__nav-item--prev',
        },
        breakpoints: {
            768: {
              slidesPerView: 2,
            }
          }
    });

    sliderBeforeAfter.on('slideChangeTransitionEnd', function() {
        calculateBeforeAfter("recalc");
    });

    

    const openPopup = document.querySelectorAll('.js-open-popup');


    if (openPopup) {
        openPopup.forEach((item) => {
            item.addEventListener('click', (e) => {
                document.querySelector('.before-after__popup').classList.add('active');
            })
        });
    }

    const closePopup = document.querySelectorAll('.js-close-popup');

    if (closePopup) {
        closePopup.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.currentTarget.closest('.before-after__popup').classList.remove('active');
            })
        });
    }

