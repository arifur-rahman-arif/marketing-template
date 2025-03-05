/**
 * The navbar class
 */
class LazyLoader {
    /**
     * Construct function
     */
    constructor() {
        this.events();
    }

    /**
     * Attaches event listeners to the hamburger icon and close menu icon to toggle the mobile navigation menu.
     * @function events
     * @memberof [Name of the class or component where this function is defined]
     * @returns {void}
     */
    events() {
        document.addEventListener('DOMContentLoaded', () => {
            if (lazyScripts && lazyScripts.length > 0) {
                lazyScripts.forEach(script => {
                    // Create an Intersection Observer instance with a rootMargin of 200px
                    const observer = new IntersectionObserver(
                        entries => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    // Load the script when it's about to enter the viewport
                                    this.loadScript(`${globalVariables.buildScripts}/${script.name}`);
                                    // Unobserve the element to prevent multiple loads
                                    observer.unobserve(entry.target);
                                }
                            });
                        },
                        {
                            rootMargin: '200px 0px', // 200px below the viewport
                            threshold: 0 // Trigger as soon as any part of the element is visible
                        }
                    );

                    // Find the elements you want to observe
                    const targetElements = document.querySelectorAll(`${script.lazyLoadSection}`);

                    if (targetElements.length > 0) {
                        const bodyWidth = document.body.clientWidth;

                        if (script?.maxWidth) {
                            if (bodyWidth <= script.maxWidth) {
                                targetElements.forEach(element => {
                                    observer.observe(element);
                                });
                            }
                        } else {
                            targetElements.forEach(element => {
                                observer.observe(element);
                            });
                        }
                    }
                });
            }
        });
    }

    /**
     * Load the script lazily
     *
     * @param {string} scriptSrc
     */
    loadScript(scriptSrc: string): void {
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;
        document.head.appendChild(script);
    }
}

new LazyLoader();
