import { CountryCode, isValidNumber, parsePhoneNumber } from 'libphonenumber-js';

/**
 * Returns country code
 *
 * @returns {Promise<void>}
 */
export const detectLocation = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async position => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const response = await fetch(
                            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                        );
                        const data = await response.json();
                        resolve(data.countryCode);
                    } catch (error) {
                        console.error('Error fetching location data:', error);
                        reject(error);
                    }
                },
                error => {
                    console.error('Error retrieving location:', error);
                    reject(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            reject(new Error('Geolocation is not supported'));
        }
    });
};

/**
 * Get the top position fot he element relative to window top
 *
 * @param {(HTMLElement | null)} element
 * @returns {*}  {number}
 */
const getElementTopPosition = (element: HTMLElement | null): number => {
    return element ? element.offsetTop + getElementTopPosition(element.offsetParent as HTMLElement) : 0;
};

/**
 * Scrolls the window to bring the specified element into view.
 *
 * @param {any} element - The element to scroll into view.
 *
 * @param {number} duration - The duration of the scroll animation in milliseconds.
 *
 * @returns {void}
 */
export const scrollIntoView = (element: any, duration = 0.7) => {
    if (!element) return;

    const start = window.pageYOffset;
    const target = getElementTopPosition(element as HTMLElement) - 200;
    const distance = target - start;
    let currentTime = 0;

    /**
     * Timer function
     *
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @returns {number}
     */
    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    /**
     * Animates scrolling to a specific position on the page using the easing function easeInOutQuad.
     *
     * @function animateScroll
     * @returns {void}
     */
    const animateScroll = () => {
        currentTime += 1 / 60;

        const newPosition = easeInOutQuad(currentTime, start, distance, duration);
        window.scrollTo(0, newPosition);

        if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
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

/**
 * Check if the name is valid or not
 *
 * @param {string} name
 * @returns {*}  {boolean}
 */
export const isNameValid = (name: string): boolean => {
    // Remove leading and trailing whitespaces from the name
    const trimmedName = name.trim();

    // Check if the name contains only letters, spaces, or hyphens
    const nameRegex = /^[a-zA-Z\s-]+$/;
    if (!nameRegex.test(trimmedName)) {
        return false;
    }

    // Check if the name has at least two characters
    if (trimmedName.length < 2) {
        return false;
    }

    // Check if the name has at more than 30 characters
    if (trimmedName.length > 30) {
        return false;
    }

    // All checks passed, the name is valid
    return true;
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
 * Validate the pone number based on country
 *
 * @param {string} phoneNumber
 * @param {CountryCode} country
 * @returns {*}  {boolean}
 */
export const validatePhoneNumber = (phoneNumber: string, country: CountryCode): boolean => {
    return isValidNumber(phoneNumber, country);
};

/**
 * Valid the product quantity number
 *
 * @param {number} quantity
 * @returns {*}  {boolean}
 */
export const validateProductQuantity = (quantity: number): boolean => {
    // Check if the quantity is a positive integer
    return Number.isInteger(quantity) && quantity > 0 && quantity < 9999999;
};

/**
 * Validate address
 * @param {string} address
 * @returns {boolean}
 */
export const validateAddress = (address: string): boolean => {
    // Perform address validation logic here
    // You can use regular expressions, string manipulation, or any other validation rules specific to your address format

    // Example validation: Check if the address is not empty
    return address.trim() !== '';
};

/**
 * Format the phone number into international number format
 *
 * @param {string} number
 * @param {CountryCode} [countryCode='GB']
 * @returns {*}  {Promise<string>}
 */
export const formatNumberToInternational = (number: string, countryCode: CountryCode = 'US'): string => {
    return parsePhoneNumber(number, countryCode).formatInternational() || '';
};
