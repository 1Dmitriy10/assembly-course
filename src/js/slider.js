import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

export const swiper = new Swiper(".teacher__list", {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    speed: 600,
});