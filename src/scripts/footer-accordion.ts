class FooterAccordion {
    accordionButtons: JQuery<HTMLElement>;

    constructor() {
        this.accordionButtons = $('.footer-accordion .accordion-button');
        this.handleResize();
        $(window).on('resize', this.handleResize);
    }

    /**
     * Checks screen width and adds/removes event listeners accordingly
     */
    handleResize = (): void => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 1024) {
            this.enableAccordion();
        } else {
            this.disableAccordion();
        }
    };

    /**
     * Enable accordion functionality
     */
    enableAccordion(): void {
        this.accordionButtons.off('click').on('click', this.toggleAccordion);
    }

    /**
     * Disable accordion functionality and reset styles
     */
    disableAccordion(): void {
        this.accordionButtons.off('click'); // Remove event listeners
        $('.accordion-content').removeAttr('style'); // Ensure all accordions are visible
        $('.accordion-button img').css('transform', 'rotate(0deg)');
    }

    /**
     * Toggles the accordion content and animates the arrow icon
     * @param event - Click event
     */
    toggleAccordion = (event: JQuery.ClickEvent): void => {
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
    };
}

// Instantiate the FooterAccordion class
new FooterAccordion();
