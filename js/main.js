const swiper = new Swiper('.swiper', {
    slidesPerView: 1,

    autoplay: {
        delay: 3000,
    }, 

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    loop: true,
});