(function(){

    // Основной слайдер на главной странице
    if(document.querySelector(".js-main-slider")){

        let mainSwiper = new Swiper(".js-main-slider", {
            init: false,
            speed: 1200,
            loop: false,
            direction: "vertical",
            watchOverflow: true,
            navigation: {
                nextEl: ".main-slider__arrow--down",
                prevEl: ".main-slider__arrow--up",
            },
        });
    
        if(mainSwiper.wrapperEl.children.length > 1){
            mainSwiper.params.loop = true;
            mainSwiper.init();
        }else{
            mainSwiper.init();
        };

    };

    // Слайдер проблем на главной странице
    let problemSliderIsActive = false;

    function createProblemsSlider(){
        let problemsSwiper = new Swiper(".js-problems-slider", {
            speed: 900,
            loop: true,
            direction: "vertical",
            navigation: {
                nextEl: ".problems-slider__arrow--down",
                prevEl: ".problems-slider__arrow--up",
            },
        });

        problemSliderIsActive = true;
    
        problemsSwiper.on("resize", function(){
            if(document.documentElement.clientWidth < 1083){
                problemsSwiper.destroy();
                problemSliderIsActive = false;
            };
        });
    };

    window.addEventListener("load", function(){
        if(document.documentElement.clientWidth > 1083 && document.querySelector(".js-problems-slider")){
            createProblemsSlider();
        };
        
    });

    window.addEventListener("resize", function(){
        if(document.documentElement.clientWidth > 1083 && document.querySelector(".js-problems-slider")){
            if(!problemSliderIsActive){
                createProblemsSlider();
            };
        };
    });
})();