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