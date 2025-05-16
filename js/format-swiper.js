const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 5,
        },
    },

    navigation: {
        nextEl: '.slider-button.next',
        prevEl: '.slider-button.prev',
    },
});