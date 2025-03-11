class Accordion {
    constructor() {
        this.accordionItems = $('.mfs-accordion-item');
        this.accordionButtons = $('.mfs-accordion-button');
        this.init();
    }

    init() {
        this.setAccordionHeightVariable();
        this.accordionButtons.on('click', this.toggleAccordion);
    }

    setAccordionHeightVariable = () => {
        // Set the height dynamically for the active accordion on page load
        this.accordionItems.each((index, item) => {
            const $item = $(item);
            const content = $item.find('.mfs-accordion-content');

            content.css('--accordion-content-height', `${content[0].scrollHeight + 200}px`);
        });
    };

    toggleAccordion = event => {
        const button = $(event.currentTarget);
        const item = button.parent();

        // Close all other items
        item.parents('.mfs-accordion').find('.mfs-accordion-item').removeClass('active');

        // Toggle current item
        item.addClass('active');
    };
}

export default Accordion;
