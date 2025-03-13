import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, EffectFade, Autoplay } from 'swiper/modules';

export default class SwiperSetup {
    constructor() {
        Swiper.use([Navigation, Pagination, Keyboard, EffectFade, Autoplay]);

        this.initSpotsSwiper();
        this.initTestimonialSwiper();
        this.initTrustedSlider();
        this.initCentreImageSlider();
    }

    initSpotsSwiper() {
        new Swiper('.swiper--spots', {
            speed: 2000,
            slidesPerView: 1,
            effect: 'fade',
            autoHeight: true,
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
                370: {
                    autoHeight: true
                },
                1024: {
                    autoHeight: false
                }
            }
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

        this.initTestimonialExternalButtons();

        // Add the slideChange event listener to update button states
        this.testimonialSlider.on('slideChange', () => {
            this.updateNavigationButtons();
        });

        // Initial check to set the button states
        this.updateNavigationButtons();
    }

    initTestimonialExternalButtons() {
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

    initTrustedSlider() {
        new Swiper('.swiper--trusted-brands', {
            speed: 2000,
            slidesPerView: 'auto',
            spaceBetween: 152,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            slidesOffsetBefore: 24,
            centerInsufficientSlides: true,
            keyboard: true,
            breakpoints: {
                320: {
                    spaceBetween: 76
                },
                768: {
                    spaceBetween: 152
                }
            }
        });
    }

    initCentreImageSlider() {
        const totalSlides = $('.swiper--centres .swiper-slide').length;

        this.centreSlider = new Swiper('.swiper--centres', {
            speed: 2000,
            spaceBetween: 30,
            centerInsufficientSlides: true,
            keyboard: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: Math.min(totalSlides, 2)
                },
                1280: {
                    slidesPerView: Math.min(totalSlides, 3) // Max 3 per view at 1280px
                }
            }
        });

        this.initCentreSlideExternalNav();

        // Add the slideChange event listener to update button states
        this.centreSlider.on('slideChange', () => {
            this.updateCentreSlideNavigationButtons();
        });

        // Initial check to set the button states
        this.updateCentreSlideNavigationButtons();
    }

    initCentreSlideExternalNav() {
        const prevButton = $('#explore-our-centre .external-prev');
        const nextButton = $('#explore-our-centre .external-next');

        prevButton.on('click', () => {
            this.centreSlider.slidePrev();
        });

        nextButton.on('click', () => {
            this.centreSlider.slideNext();
        });
    }

    updateCentreSlideNavigationButtons() {
        const prevButton = $('#explore-our-centre .external-prev');
        const nextButton = $('#explore-our-centre .external-next');

        // Check if the first slide is active to disable the previous button
        if (this.centreSlider.isBeginning) {
            prevButton.prop('disabled', true); // Disable the "Previous" button if it's the first slide
            prevButton.addClass('opacity-30 pointer-events-none');
        } else {
            prevButton.prop('disabled', false); // Enable the "Previous" button if it's not the first slide
            prevButton.removeClass('opacity-30 pointer-events-none');
        }

        // Check if the last slide is active to disable the next button
        if (this.centreSlider.isEnd) {
            nextButton.prop('disabled', true); // Disable the "Next" button if it's the last slide
            nextButton.addClass('opacity-30 pointer-events-none');
        } else {
            nextButton.prop('disabled', false); // Enable the "Next" button if it's not the last slide
            nextButton.removeClass('opacity-30 pointer-events-none');
        }
    }
}
