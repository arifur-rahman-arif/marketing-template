import '../styles/main.scss';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/themes/material.css';
import 'tippy.js/animations/shift-away.css';
import 'plyr/dist/plyr.css';
import 'animate.css';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

declare global {
    interface Window {
        tippy: typeof tippy;
        globalVariables: {
            assetsUrl: string;
            siteUrl: string;
            restUrl: string;
            themeRestUrl: string;
            nonce: string;
            pageSlug: string;
            buildScripts: string;
        };
    }
}

// Add tippy to the global scope
window.tippy = tippy;
// @ts-ignore
window.$ = (jQuery as any).noConflict();

// Initialize tooltips for initial page loads
// Initialize tooltips for initial page loads
const $window = $(window);

if (window.innerWidth >= 768) {
    tippy('[data-tippy-content]', {
        placement: 'top',
        animation: 'shift-away',
        maxWidth: '400px',
        arrow: true,
        inertia: true,
        duration: 700,
        theme: 'material'
        // showOnCreate: true,
        // interactive: true,
        // trigger: 'click'
    });
}
// This will run when the checkout form is loaded or updated via AJAX
$(document.body).on('updated_checkout', function () {
    tippy('[data-tippy-content]', {
        placement: 'top',
        animation: 'shift-away',
        maxWidth: '400px',
        arrow: true,
        inertia: true,
        duration: 700,
        theme: 'material'
    });
});

// Add new global variables to the window object to use it across all typescript files
// To add new variable reference to avoid typescript error check global.d.ts file to add new more
window.globalVariables = {
    assetsUrl: globalVariables.assetsUrl,
    siteUrl: globalVariables.siteUrl,
    restUrl: globalVariables.restUrl,
    themeRestUrl: globalVariables.themeRestUrl,
    nonce: globalVariables.nonce,
    pageSlug: globalVariables.pageSlug,
    buildScripts: globalVariables.buildScripts
};

/**
 * Closes the modal with the id "jc-modal" by adding a "hide" class to trigger a slide-down animation.
 * After the animation is finished, the modal is removed from the DOM.
 *
 * @returns {void}
 */
// @ts-ignore
window.closeJcModal = function () {
    // Add 'hide' class to trigger slide-down animation
    $('#jc-modal').addClass('hide');

    // Remove modal after the animation is finished (delay matches transition time)
    setTimeout(function () {
        $('#jc-modal').remove();
    }, 500); // Make sure this delay matches the CSS transition duration (0.5s)
};

// ------------------- Website modal element --------------------------------
$('[modal-content]').on('click', function () {
    const html = $(this).attr('modal-content');

    // Create the modal HTML with the dynamic video source and poster
    const modal = `
    <div id="jc-modal" class="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-75 flex justify-center items-center">
        <div
            class="relative w-[90%] max-w-[50rem] bg-color16 p-4 pt-12 rounded-radius2 grid content-center modal-container overflow-y-auto">

            <button id="close-modal" title="Close modal"
                class="w-6 h-6 absolute top-0 right-0 -translate-x-3 translate-y-3 transition-all duration-500 hover:scale-110 z-[2]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-color10 pointer-events-none">
                    <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
            </button>

           <div class="relative w-full overflow-hidden [&_.plyr]:!max-h-full jc-modal__modal-content max-h-[calc(100vh_-_5rem)] overflow-y-auto">
                ${html}
           </div>
        </div>
    </div>`;

    // Append the modal HTML to the body
    $('body').append(modal);

    tippy('[data-tippy-content]', {
        placement: 'top',
        animation: 'shift-away',
        maxWidth: '400px',
        arrow: true,
        inertia: true,
        duration: 700,
        theme: 'material'
    });

    // Add the 'show' class to trigger the slide-up animation
    setTimeout(function () {
        $('#jc-modal').addClass('show');
    }, 50); // Timeout is necessary to ensure the modal is in the DOM before the animation starts
});

// Close the modal when the close button is clicked, when clicking outside the video, or when pressing the ESC key
$(document).on('click', '#close-modal, #jc-modal, .close-modal', function (e) {
    if (
        e.target.id === 'jc-modal' ||
        e.target.id === 'close-modal' ||
        $(e.target).is('.close-modal') ||
        $(e.target).parents('.close-modal').length
    ) {
        // @ts-ignore
        closeJcModal();
    }
});

/**
 * Handles the closing of the modal when the Escape key is pressed or when clicking outside the modal.
 *
 * @param e - The event object that triggered the function.
 * @returns {void}
 */
$(document).on('keydown', function (e) {
    // Check if the Escape key is pressed and the modal exists
    if (e.key === 'Escape' && $('#jc-modal').length) {
        // Add 'hide' class to trigger slide-down animation
        $('#jc-modal').addClass('hide');

        // Remove modal after the animation is finished (delay matches transition time)
        setTimeout(function () {
            $('#jc-modal').remove();
        }, 500); // Make sure this delay matches the CSS transition duration (0.5s)
    }
});
