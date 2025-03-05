// @ts-ignore
const loginForm = $('#login-form');
const signupForm = $('#sign-form');
const resetForm = $('#reset-form');
// @ts-ignore
const submitButton = $('.submit-button');
// @ts-ignore
const alertElement = $('.alert-message');

// Login Input fields, Reset input fields
const userLoginElement = $('#user-login');
const passwordElement = $('#password');
// Sign up input fields
const nameElement = $('#name');
const usernameElement = $('#user-name');
const emailElement = $('#email');

// Function to remove .show-error class on input value changes
function removeShowErrorOnChange() {
    const inputs = [userLoginElement, passwordElement, nameElement, usernameElement, emailElement];

    inputs.forEach(input => {
        input.on('input', function () {
            $(this).parents('.input-container').removeClass('show-error');
        });
    });
}

// Call the function to initialize the event listeners
removeShowErrorOnChange();

loginForm.on('submit', e => {
    e.preventDefault();

    // Retrieve values from fields
    const userLogin = ((userLoginElement.val() as string) || '').trim();
    const password = ((passwordElement.val() as string) || '').trim();

    let showError = false;

    if (userLogin === '') {
        userLoginElement.parent().addClass('show-error');
        showError = true;
    }

    if (password === '') {
        passwordElement.parent().addClass('show-error');
        showError = true;
    }

    if (showError) {
        // Scroll the loginForm into view
        $('html, body').animate(
            {
                scrollTop: (loginForm as any).offset().top - 500
            },
            500
        );

        alertElement.html('필수 입력란을 모두 작성해 주세요.').fadeIn(2000);

        return;
    }

    alertElement.hide();

    // If all validation passes, submit the form
    submitButton.addClass('jc-button--loading');

    // Prepare data for submission
    const payload: any = {
        userLogin,
        password,
        type: 'login'
    };

    try {
        formSubmit(payload);
    } catch (error) {
        $('html, body').animate(
            {
                scrollTop: (loginForm as any).offset().top - 500
            },
            500
        );
        alertElement.html('계정을 생성할 수 없습니다. 다시 시도해 주세요.').fadeIn(2000);
    }
});

/**
 * Handles the submission of the sign-up form.
 */
signupForm.on('submit', e => {
    e.preventDefault(); // Prevent default form submission

    // Retrieve values from fields
    const name = ((nameElement.val() as string) || '').trim();
    const username = ((usernameElement.val() as string) || '').trim();
    const email = ((emailElement.val() as string) || '').trim();

    let showError = false; // Flag to track if there are any validation errors

    // Validate name input
    if (name === '') {
        nameElement.parent().addClass('show-error'); // Show error for name field
        showError = true; // Set flag to true
    } else {
        nameElement.parent().removeClass('show-error'); // Remove error if valid
    }

    // Validate username input
    if (username === '') {
        usernameElement.parent().addClass('show-error'); // Show error for username field
        showError = true; // Set flag to true
    } else {
        usernameElement.parent().removeClass('show-error'); // Remove error if valid
    }

    // Validate email input
    if (email === '') {
        emailElement.parent().addClass('show-error'); // Show error for email field
        showError = true; // Set flag to true
    } else {
        emailElement.parent().removeClass('show-error'); // Remove error if valid
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        emailElement.parent().addClass('show-error');
        e.preventDefault();
        showError = true;
    }

    // If there are validation errors, scroll to the form and show an alert
    if (showError) {
        $('html, body').animate(
            {
                scrollTop: (signupForm as any).offset().top - 500
            },
            500
        );

        alertElement.html('필수 입력란을 모두 작성해 주세요.').fadeIn(2000); // Show alert message
        return; // Exit the function
    }

    alertElement.hide(); // Hide the alert element if there are no errors

    // If all validation passes, submit the form
    submitButton.addClass('jc-button--loading'); // Change button state to loading

    // Prepare data for submission
    const payload: any = {
        name,
        username,
        email,
        type: 'signup' // Indicate that this is a signup request
    };

    try {
        formSubmit(payload); // Call the function to handle form submission
    } catch (error) {
        // Scroll to the form and show an error message if submission fails
        $('html, body').animate(
            {
                scrollTop: (signupForm as any).offset().top - 500
            },
            500
        );
        alertElement.html('Something went wrong. Please contact admin').fadeIn(2000); // Show error message
    }
});

resetForm.on('submit', e => {
    e.preventDefault();

    // Retrieve values from fields
    const userLogin = ((userLoginElement.val() as string) || '').trim();

    let showError = false;

    if (userLogin === '') {
        userLoginElement.parent().addClass('show-error');
        showError = true;
    }

    if (showError) {
        // Scroll the loginForm into view
        $('html, body').animate(
            {
                scrollTop: (resetForm as any).offset().top - 500
            },
            500
        );

        alertElement.html('필수 입력란을 모두 작성해 주세요.').fadeIn(2000);

        return;
    }

    alertElement.hide();

    // If all validation passes, submit the form
    submitButton.addClass('jc-button--loading');

    // Prepare data for submission
    const payload: any = {
        userLogin,
        type: 'reset-password'
    };

    try {
        formSubmit(payload);
    } catch (error) {
        $('html, body').animate(
            {
                scrollTop: (resetForm as any).offset().top - 500
            },
            500
        );
        alertElement.html('Something went wrong. Please contact admin').fadeIn(2000);
    }
});

function formSubmit(payload: any): void {
    const restUrl = `${globalVariables.themeRestUrl}/authentication`;

    setPageReferrer();

    submitButton.addClass('jc-button--loading');

    $.ajax({
        url: restUrl,
        type: 'POST',
        headers: {
            'X-WP-NONCE': globalVariables.nonce
        },
        data: JSON.stringify(payload),
        complete: function () {
            submitButton.removeClass('jc-button--loading');
        },
        success: function (response) {
            if (payload.type === 'login') {
                $('.page-alert').html('Login successful. Redirecting...').addClass('active');

                const redirectionUrl = getSavedPageReferrer();

                setTimeout(() => {
                    window.location.href = redirectionUrl || '/';

                    window.location.href = redirectionUrl === 'undefined' || !redirectionUrl ? '/' : redirectionUrl;

                    localStorage.removeItem('pageReferrer');
                }, 1500);
            }

            if (payload.type === 'signup') {
                signupForm.parent().removeClass('grid').addClass('hidden');
                $('.thank-you').fadeIn(2000);
            }

            if (payload.type === 'reset-password') {
                resetForm.parent().removeClass('grid').addClass('hidden');
                $('.thank-you').fadeIn(2000);
            }
        },
        error: function (error) {
            // Scroll the form into view
            if (payload.type === 'login') {
                $('html, body').animate(
                    {
                        scrollTop: (loginForm as any).offset().top - 500
                    },
                    500
                );
            } else if (payload.type === 'signup') {
                $('html, body').animate(
                    {
                        scrollTop: (signupForm as any).offset().top - 500
                    },
                    500
                );
            } else if (payload.type === 'reset-password') {
                $('html, body').animate(
                    {
                        scrollTop: (resetForm as any).offset().top - 500
                    },
                    500
                );
            }
            alertElement.html(error.responseJSON.data.message).fadeIn(2000);
            console.error(error);
        }
    });
}

function getPageReferrer() {
    const currentUrl = new URL(window.location.href);
    return currentUrl?.href?.split('?redirect=')[1]?.split('&')[0];
}

function setPageReferrer() {
    const pageReferrer = getPageReferrer();
    localStorage.setItem('pageReferrer', pageReferrer);
}

function getSavedPageReferrer() {
    return localStorage.getItem('pageReferrer') || '';
}
