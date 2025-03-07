import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel, Keyboard, EffectFade } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Mousewheel, Keyboard, EffectFade]);

new Swiper('.swiper--spots', {
    speed: 2000,
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true
});
