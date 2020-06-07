(function () {
    
    // Конструктор фильтров в виде селекта
    function SelectFilter(elem){
        let filter = {};

        // Определяет фильтруемый контент для данного фильтра
        filter.theme = elem.getAttribute("data-for");
        let filteredContent = document.querySelectorAll(".js-filtered-content");
        if(filteredContent){
            for(let i = 0; i < filteredContent.length; i++){
                if(filteredContent[i].getAttribute("data-content") == filter.theme){
                    filter.for = filteredContent[i];
                    break;
                };
            };
        };

        // Получает управляющий элемент фильтра
        let filterController = elem.querySelector(".js-select");

        // Проверяет текущий выбранный элементы и выводит контент
        changeFilterContent(filterController, filter.for);

        // При изменении, проверять контент
        filterController.addEventListener("change", changeFilterContent.bind(null, filterController, filter.for));
    };

    // Меняет контент, при изменении выбора в фильтре
    function changeFilterContent(controller, filterContent){

        // Находит все фильтруемые элементы
        let filteredElems = filterContent.querySelectorAll("[data-filter-group]");
        if(filteredElems){

            // Смотрит, к каким параметрам фильтрации подходят
            for(let i = 0; i < filteredElems.length; i++){
                if(filteredElems[i].getAttribute("data-filter-group").includes(controller.value)){
                    if(filteredElems[i].classList.contains("js-content-is-hidden")){
                        filteredElems[i].classList.remove("js-content-is-hidden");
                    };
                }else{
                    if(!filteredElems[i].classList.contains("js-content-is-hidden")){
                        filteredElems[i].classList.add("js-content-is-hidden");
                    };
                };
            };
        };
    };

    // Находим все фильтры на странице и инициализируем
    let filters = document.querySelectorAll(".js-select-filter");
    if(filters){
        for(let i = 0; i < filters.length; i ++){
            let filter = new SelectFilter(filters[i]);
        };
    };

})();
