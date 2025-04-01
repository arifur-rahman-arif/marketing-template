// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**
 * Hook to check if user clicked or press any other elements other than giving element
 *
 * @returns {*}
 */
const canUsePassiveEvents = () => {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') return false;

    let passive = false;
    const options = Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line getter-return,require-jsdoc
        get() {
            passive = true;
        }
    });
    // eslint-disable-next-line require-jsdoc
    const noop = () => null;

    window.addEventListener('test', noop, options);
    window.removeEventListener('test', noop, options);

    return passive;
};

export default canUsePassiveEvents;
