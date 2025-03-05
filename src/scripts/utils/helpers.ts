/**
 *  * Return all the parent element of a given element
 *  * if an selector is given than return true
 *
 * @param {Element | null} node
 * @param {string} targetParent
 * @returns {Array<Element> | boolean}
 */
export const parents = (node: Element | null, targetParent = ''): Array<Element> | boolean => {
    const parentElements: Array<Element> = [];

    while (node) {
        const parentNode = node?.parentNode as Element;

        if (targetParent && parentNode?.classList?.contains(targetParent)) return true;

        parentElements.push(node);
        node = node.parentNode as Element;
    }

    return parentElements || [];
};

/**
 * Retrieves the top position of an HTML element relative to its offset parent.
 * If the element is null, the function returns 0.
 *
 * @param {HTMLElement | null} element The HTML element for which to retrieve the top position.
 * @returns {number} The top position of the element relative to its offset parent.
 */
export const getElementTopPosition = (element: HTMLElement | null): number => {
    return element ? element.offsetTop + getElementTopPosition(element.offsetParent as HTMLElement) : 0;
};

/**
 * Returns the parent element of a given node that matches the specified selector.
 *
 * @param {Element | null} node - The node whose parent element is to be found.
 * @param {string} targetParentSelector - The selector to match the parent element against.
 * @returns {Array<Element> | Element | boolean} - The parent element(s) that match the selector, or false if no matching parent element is found.
 */
export const getParentElement = (
    node: Element | null,
    targetParentSelector = ''
): Array<Element> | Element | boolean => {
    let parentElement: Element | null = null;

    while (node) {
        const parentNode = node?.parentNode as Element;

        if (targetParentSelector && parentNode?.classList?.contains(targetParentSelector)) {
            return (parentElement = parentNode);
        }

        node = node.parentNode as Element;
    }

    return parentElement || false;
};

/**
 * Check if the email is valid or not
 *
 * @param {string} email
 * @returns {*}  {boolean}
 */
export const isEmailValid = (email: string): boolean => {
    // Remove leading and trailing whitespaces from the email
    const trimmedEmail = email.trim();

    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (!emailRegex.test(trimmedEmail)) {
        return false;
    }

    // All checks passed, the email is valid
    return true;
};

/**
 * Check if the password is valid or not
 *
 * @param {string} password
 * @returns {*}  {boolean}
 */
export const isPasswordValid = (password: string): boolean => {
    // Regular expression pattern for password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    // Check if the password matches the pattern
    if (!passwordRegex.test(password)) {
        return false;
    }

    // All checks passed, the password is valid
    return true;
};

/**
 * Validate an email by regular expression
 *
 * @param {string} email
 * @returns {RegExpMatchArray | null}
 */
export const validateEmail = (email: string): RegExpMatchArray | null => {
    return String(email)
        .toLowerCase()
        .match(
            // eslint-disable-next-line max-len
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
