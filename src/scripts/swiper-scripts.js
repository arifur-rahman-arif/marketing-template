import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel, Keyboard, EffectFade } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Mousewheel, Keyboard, EffectFade]);

export default class SwiperSetup {
    constructor() {
        this.initSpotsSwiper();
        this.initTestimonialSwiper();
        this.initExternalButtons();
    }

    initSpotsSwiper() {
        new Swiper('.swiper--spots', {
            speed: 2000,
            slidesPerView: 1,
            effect: 'fade',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            keyboard: true
        });
    }

    initTestimonialSwiper() {
        this.testimonialSlider = new Swiper('.swiper--testimonials', {
            speed: 1500,
            slidesPerView: 'auto',
            spaceBetween: 10,
            autoHeight: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            keyboard: true,
            breakpoints: {
                768: {
                    spaceBetween: 40
                }
            }
        });

        // Add the slideChange event listener to update button states
        this.testimonialSlider.on('slideChange', () => {
            this.updateNavigationButtons();
        });

        // Initial check to set the button states
        this.updateNavigationButtons();
    }

    initExternalButtons() {
        const prevButton = $('#testimonial-slider .external-prev');
        const nextButton = $('#testimonial-slider .external-next');

        prevButton.on('click', () => {
            this.testimonialSlider.slidePrev();
        });

        nextButton.on('click', () => {
            this.testimonialSlider.slideNext();
        });
    }

    // Method to update the state of the external navigation buttons
    updateNavigationButtons() {
        const prevButton = $('#testimonial-slider .external-prev');
        const nextButton = $('#testimonial-slider .external-next');

        // Check if the first slide is active to disable the previous button
        if (this.testimonialSlider.isBeginning) {
            prevButton.prop('disabled', true); // Disable the "Previous" button if it's the first slide
            prevButton.addClass('opacity-30 pointer-events-none');
        } else {
            prevButton.prop('disabled', false); // Enable the "Previous" button if it's not the first slide
            prevButton.removeClass('opacity-30 pointer-events-none');
        }

        // Check if the last slide is active to disable the next button
        if (this.testimonialSlider.isEnd) {
            nextButton.prop('disabled', true); // Disable the "Next" button if it's the last slide
            nextButton.addClass('opacity-30 pointer-events-none');
        } else {
            nextButton.prop('disabled', false); // Enable the "Next" button if it's not the last slide
            nextButton.removeClass('opacity-30 pointer-events-none');
        }
    }
}
