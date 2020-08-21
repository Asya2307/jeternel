document.addEventListener('DOMContentLoaded', function() {
    function resizeWatcher() {
        var tableSel = document.querySelectorAll('table');
        var scrollArray = [];
  
        if (tableSel.length) {
          tableSel.forEach(function (item, i) {
            var orgHtml = item.outerHTML;
            item.outerHTML = "<div class='table-scroller".concat(i, "'>").concat(orgHtml, "</div>");
            var ps = new PerfectScrollbar(".table-scroller".concat(i), {
              wheelPropagation: true
            });
            scrollArray.push(ps);
          });
          window.addEventListener('resize', function () {
            if (scrollArray.length) {
              scrollArray.forEach(function (item) {
                item.update();
              });
            }
          });
        }
      }
  
      resizeWatcher();
});

const actionSlider = document.querySelectorAll('.js-action-slider');


let actionSliderIsActive = false;

function createactionsSlider() {
  actionSlider.forEach((item) => {
    let actionsSwiper = new Swiper(item, {
      speed: 700,
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      direction: 'vertical',
      navigation: {
        nextEl: item.querySelector('.action__slider-arrow--left'),
        prevEl: item.querySelector('.action__slider-arrow--right'),
      },
    });



    actionSliderIsActive = true;

    actionsSwiper.on("resize", function () {
      if (document.documentElement.clientWidth < 768) {
        actionsSwiper.destroy();
        actionSliderIsActive = false;
      };
    });
  });
};

window.addEventListener("load", function () {
  if (document.documentElement.clientWidth > 768 && document.querySelector(".js-action-slider")) {
    createactionsSlider();
  }
});

window.addEventListener("resize", function(){
  if(document.documentElement.clientWidth > 768 && document.querySelector(".js-action-slider") && !actionSliderIsActive){
        createactionsSlider();
  };
});


      