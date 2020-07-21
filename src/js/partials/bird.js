const sectionBird = document.querySelector('.section__bird');

if (sectionBird) {
    const pens = sectionBird.querySelectorAll('.section__bird-item');
    const blockPosition = sectionBird.scrollHeight;

    document.addEventListener('scroll', (e) => {
        const scroll = window.pageYOffset;
        console.log((blockPosition - 300), scroll)
        if (scroll > (blockPosition - 800)) {
            pens.forEach((item,index) => {
                item.classList.add(`section__bird-item--${ index + 1 }`)
            });
            setTimeout(() => {
                pens.forEach((item) => {
                    item.classList.add(`active`)
                });
            }, 2000)
        };
        
    })
}