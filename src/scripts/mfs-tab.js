class MFS_Tab {
    constructor() {
        this.tabButtons = $('.mfs-tab__btn');

        if (this.tabButtons.length) {
            this.initializeTabs();
        }
    }

    initializeTabs() {
        this.tabButtons.on('click', this.handleTabClick);
    }

    handleTabClick = event => {
        const button = event.target;
        const parent = $(button).parents('.mfs-tab');
        const targetTab = $(button).data('tab');

        if ($(button).hasClass('active')) return; // Prevent redundant clicks

        // Align the clicked button to the center
        this.alignButtonToCenter(button, parent);

        // Remove active class from all buttons
        parent.find('.mfs-tab__btn').removeClass('active');
        // Add active class to clicked button
        $(button).addClass('active');

        // Hide all tab contents smoothly
        parent.find('.mfs-tab__content').removeClass('active');

        // Show the selected tab with transition
        const targetContent = parent.find(`.mfs-tab__content[data-target="${targetTab}"]`);
        targetContent.addClass('active');

        // Hide all tab contents smoothly
        // const allContents = parent.find('.mfs-tab__content.active');
        // allContents.removeClass('active').addClass('inactive');

        // // Show selected tab with transition
        // const targetContent = parent.find(`.mfs-tab__content[data-target="${targetTab}"]`);
        // setTimeout(() => {
        //     allContents.removeClass('inactive').hide();
        //     targetContent.show().addClass('active');
        // }, 500);
    };

    alignButtonToCenter = (button, parent) => {
        const container = $(parent).find('.mfs-tab__btn-container');
        const containerWidth = container.width();
        const buttonPosition = $(button).position().left;
        const buttonWidth = $(button).outerWidth();

        const scrollPosition = container.scrollLeft() + buttonPosition - containerWidth / 2 + buttonWidth / 2;

        container.animate({ scrollLeft: scrollPosition }, 300); // Adjust speed if needed
    };
}

export default MFS_Tab;
