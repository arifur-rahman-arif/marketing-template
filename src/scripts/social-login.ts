// --------------------------- Google login ---------------------------

// Constants
const GOOGLE_CLIENT_ID = $('#google-client-id').val() as string;
const REDIRECT_URI = $('#redirect-uri').val() as string;
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=email%20profile`;
const LOGIN_POPUP_DIMENSIONS = { width: 1200, height: 800 };

const pageAlert = $('.page-alert');
// @ts-ignore
const loginForm = $('#login-form');

function socialGetPageReferrer() {
    const currentUrl = new URL(window.location.href);
    return currentUrl?.href?.split('?redirect=')[1]?.split('&')[0];
}

function socialSetPageReferrer() {
    const pageReferrer = socialGetPageReferrer();
    localStorage.setItem('pageReferrer', pageReferrer);
}

function socialGetSavedPageReferrer() {
    return localStorage.getItem('pageReferrer') || '';
}

function socialClearPageReferrer() {
    localStorage.removeItem('pageReferrer');
}

// Google login setup
function initializeGoogleLogin() {
    // Event listener for Google login button
    $('#google-login-button').on('click', function () {
        socialSetPageReferrer();
        // Redirect to the Google login URL in the current tab
        window.location.href = GOOGLE_AUTH_URL;
    });
}

// Helper to open Google login in a centered popup window
// function openGoogleLoginPopup() {
//     const { width, height } = LOGIN_POPUP_DIMENSIONS;
//     const left = (window.screen.width - width) / 2;
//     const top = (window.screen.height - height) / 2;

//     window.open(GOOGLE_AUTH_URL, 'googleLoginPopup', `width=${width},height=${height},top=${top},left=${left}`);
// }

// Function to handle Google Sign-In response
function handleSocialSignIn() {
    let token: string | null = '';
    let type = 'google-login';

    const urlParams = new URLSearchParams(window.location.search);
    const linkedinCode = urlParams.get('code');
    const linkedinState = urlParams.get('state');

    if (!window.location.hash && !linkedinCode) {
        return;
    }

    // This is for google login has
    if (window.location.hash) {
        // Send the token to your custom WordPress API endpoint using jQuery.ajax
        const tokenParams = new URLSearchParams(window.location.hash.substring(1));
        token = tokenParams.get('access_token');
    }

    // this is for linkedin token code
    if (linkedinCode) {
        // Validate the state parameter to prevent CSRF attacks
        // The state parameter is unique for each authorization request
        // and is stored in sessionStorage for later validation
        if (linkedinState !== sessionStorage.getItem('linkedin_auth_state')) {
            // If the state values do not match, do not attempt to exchange the authorization code
            // for an access token and instead return an error

            pageAlert
                .html('Invalid LinkedIn authentication state. Please try again')
                .addClass('page-alert--error')
                .addClass('active');

            setTimeout(() => {
                pageAlert.removeClass('active').removeClass('page-alert--error');
            }, 5000);

            return;
        }

        token = linkedinCode;
        type = 'linkedin-login';
    }

    if (!token || token == '') {
        // let alertMessage = 'Invalid Google token. Please try again';

        // if (type === 'linkedin-login') {
        //     alertMessage = 'Invalid Linkedin token. Please try again';
        // }

        // pageAlert.html(alertMessage).addClass('page-alert--error').addClass('active');

        // setTimeout(() => {
        //     pageAlert.removeClass('active').removeClass('page-alert--error');
        // }, 5000);

        return;
    }

    loginForm.addClass('pointer-events-none opacity-40').prop('disabled', true);

    const payload = {
        token,
        type
    };

    try {
        $.ajax({
            url: `${globalVariables.themeRestUrl}/social-login`,
            type: 'POST',
            headers: {
                'X-WP-NONCE': globalVariables.nonce
            },
            data: JSON.stringify(payload),
            complete: function () {
                loginForm.removeClass('pointer-events-none opacity-40').prop('disabled', false);
            },
            success: function (response) {
                let message = 'Google login successful. Redirecting...';

                if (type === 'linkedin-login') {
                    message = 'LinkedIn login successful. Redirecting...';
                }

                pageAlert.html(message).addClass('active');

                const redirectionUrl = socialGetSavedPageReferrer() || '/';

                setTimeout(() => {
                    pageAlert.removeClass('active');

                    window.location.href = redirectionUrl === 'undefined' || !redirectionUrl ? '/' : redirectionUrl;
                    socialClearPageReferrer();
                }, 1500);
            },
            error: function (error) {
                console.log(error);

                if (error.responseJSON?.data?.status === 404) {
                    pageAlert.html(error.responseJSON.message).addClass('page-alert--error').addClass('active');
                } else {
                    pageAlert.html(error.responseJSON.data.message).addClass('page-alert--error').addClass('active');
                }
                setTimeout(() => {
                    pageAlert.removeClass('active').removeClass('page-alert--error');
                }, 5000);
            }
        });
    } catch (error) {
        pageAlert.html('Something went wrong. Please contact admin').addClass('page-alert--error').addClass('active');

        setTimeout(() => {
            pageAlert.removeClass('active').removeClass('page-alert--error');
        }, 5000);
    }
}

// Initialize Google login button on page load
initializeGoogleLogin();

// After user is authenticated, handle the Google Sign-In response
handleSocialSignIn();

// --------------------------- LinkedIn login ---------------------------

// Constants
const LINKEDIN_CLIENT_ID = $('#linkedin-client-id').val() as string;
const LINKEDIN_REDIRECT_URI = $('#redirect-uri').val() as string;

// LinkedIn login setup
function initializeLinkedInLogin() {
    $('#linkedin-login-button').on('click', function () {
        // Generate a unique state parameter
        const state = generateState();
        // Store the state in sessionStorage for later validation
        sessionStorage.setItem('linkedin_auth_state', state);

        // Construct the LinkedIn authorization URL with the unique state
        const LINKEDIN_AUTH_URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${LINKEDIN_REDIRECT_URI}&state=${state}&scope=profile%20email%20openid`;

        socialSetPageReferrer();
        // Redirect to LinkedIn login URL in the current tab
        window.location.href = LINKEDIN_AUTH_URL;
    });
}

// Initialize LinkedIn login button on page load
initializeLinkedInLogin();

// Function to generate a unique state parameter
function generateState() {
    const array = new Uint32Array(8); // Creates an array with 8 random values
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => dec.toString(16)).join('');
}
