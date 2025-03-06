class FooterAccordion {
    constructor() {
        this.accordionButtons = $('.footer-accordion .accordion-button');
        this.handleResize();
        $(window).on('resize', this.handleResize.bind(this));
    }

    handleResize() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 1024) {
            this.enableAccordion();
        } else {
            this.disableAccordion();
        }
    }

    enableAccordion() {
        this.accordionButtons.off('click').on('click', this.toggleAccordion.bind(this));
    }

    disableAccordion() {
        this.accordionButtons.off('click'); // Remove event listeners
        $('.accordion-content').removeAttr('style'); // Ensure all accordions are visible
        $('.accordion-button img').css('transform', 'rotate(0deg)');
    }

    toggleAccordion(event) {
        const button = $(event.currentTarget);
        const content = button.next('.accordion-content');
        const icon = button.find('img');

        if (content.is(':visible')) {
            content.slideUp(300);
            icon.css('transform', 'rotate(-180deg)');
        } else {
            content.slideDown(300);
            icon.css('transform', 'rotate(0deg)');
        }
    }
}

export default FooterAccordion;
