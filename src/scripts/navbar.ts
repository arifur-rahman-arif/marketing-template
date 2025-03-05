class Navbar {
    hamburger: JQuery<HTMLElement>;
    navBar: JQuery<HTMLElement>;
    header: JQuery<HTMLElement>;

    /**
     * Constructor initializes the elements and binds events
     */
    constructor() {
        // Select elements
        this.hamburger = $('#hamburger-menu');
        this.navBar = $('.navigation-container');
        this.header = $('#site-header');

        this.events();
        this.checkAndAddSubmenuArrows();
        this.addExternalLinkAttribute();
    }

    /**
     * Attach event listeners to the hamburger menu and window events
     */
    events(): void {
        this.hamburger.on('click', this.toggleMobileNavigationMenu);

        $(window).on('resize', () => {
            this.checkAndAddSubmenuArrows();
        });

        $(document).on('click', '.submenu-arrow', this.handleSubmenuArrowClick);
    }

    /**
     * Toggles the mobile navigation menu and updates styling
     * @param event - Click event
     */
    toggleMobileNavigationMenu = (event: JQuery.Event): void => {
        event.preventDefault();
        this.hamburger.toggleClass('active');
        this.header.toggleClass('active');
    };

    addExternalLinkAttribute = () => {
        // Add 'target="_blank"' attribute to all external links
        $('.external a').attr('target', '_blank');
    };

    /**
     * Checks screen size and adds/removes submenu arrows for mobile only
     */
    checkAndAddSubmenuArrows = (): void => {
        this.addSubmenuArrows();
    };

    /**
     * Adds an arrow icon to menu items with a sub-menu (only for mobile)
     */
    addSubmenuArrows = (): void => {
        $('.menu > li').each((_, item) => {
            const $item = $(item);
            const $submenu = $item.find('.sub-menu');

            if ($submenu.length && !$item.find('.submenu-arrow').length) {
                // Temporarily make it visible to get its height
                $submenu.css({
                    visibility: 'hidden',
                    display: 'block',
                    maxHeight: 'min-content'
                });

                const submenuHeight = $submenu.outerHeight(); // Get full height including padding

                // Reset back to hidden state
                $submenu.css({
                    visibility: '',
                    display: '',
                    maxHeight: '0'
                });

                // Store height as a CSS variable
                $submenu.css('--submenu-height', `${submenuHeight}px`);

                // Append arrow image inside the menu item
                $item.append(`
                    <button type="button" class="submenu-arrow xl:pointer-events-none" title="Toggle submenu">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="xl:w-2.5 xl:h-2.5">
                            <g id="Group">
                            <path id="Vector" d="M10.0016 11.1C9.77656 11.1 9.58906 11.025 9.40156 10.875L0.776562 2.39995C0.439062 2.06245 0.439062 1.53745 0.776562 1.19995C1.11406 0.862451 1.63906 0.862451 1.97656 1.19995L10.0016 9.03745L18.0266 1.12495C18.3641 0.787451 18.8891 0.787451 19.2266 1.12495C19.5641 1.46245 19.5641 1.98745 19.2266 2.32495L10.6016 10.8C10.4141 10.9875 10.2266 11.1 10.0016 11.1Z" fill="#333333"/>
                            </g>
                        </svg>
                    </button>
                `); // You can replace ▼ with an <img> tag if needed
            }
        });
    };

    /**
     * Removes the arrow icons when screen size is larger than mobile
     */
    removeSubmenuArrows = (): void => {
        $('.submenu-arrow').remove();
    };

    handleSubmenuArrowClick = (event: JQuery.ClickEvent): void => {
        event.preventDefault();
        const parent = $(event.currentTarget).parent();
        parent.toggleClass('active'); // Optional: Add a class for styling
    };
}

// Instantiate the Navbar class
new Navbar();
