var swiper = new Swiper(".instructorSwipper", {
    cssMode: true,
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});
var swiper = new Swiper(".testimonialSwipper", {
    cssMode: true,
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});
