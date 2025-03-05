const contactForm = $('#contact-us-form');
// const reloadButton = $('.reload-button');
const submitButton = $('#contact-us #contact-form-submit');
const thankYouContainer = $('#contact-us .thank-you');
const alertElement = $('#contact-us .alert-message');

const nameElement = $('#contact-us #contact-name');
const companyElement = $('#contact-us #contact-company');
const emailElement = $('#contact-us #contact-email');
const phoneElement = $('#contact-us #contact-phone');
const messageElement = $('#contact-us #contact-message');

function removeShowErrorOnChange() {
    const inputs = [nameElement, companyElement, emailElement, phoneElement, messageElement];

    inputs.forEach(input => {
        input.on('input', function () {
            $(this).parents('.input-container').removeClass('show-error');
        });
    });
}

removeShowErrorOnChange();

$(document).on('click', '#contact-form-submit', e => {
    e.preventDefault();

    const name = (nameElement.val() as string)?.trim() || '';
    const company = (companyElement.val() as string)?.trim() || '';
    const email = (emailElement.val() as string)?.trim() || '';
    const phone = (phoneElement.val() as string)?.trim() || '';
    const message = (messageElement.val() as string)?.trim() || '';

    let showError = false;

    if (name === '') {
        nameElement.parent().addClass('show-error');
        e.preventDefault();
        showError = true;
    }

    if (company === '') {
        companyElement.parent().addClass('show-error');
        e.preventDefault();
        showError = true;
    }

    if (email === '') {
        emailElement.parent().addClass('show-error');
        e.preventDefault();
        showError = true;
    }

    if (phone === '') {
        phoneElement.parent().addClass('show-error');
        e.preventDefault();
        showError = true;
    }

    if (message === '') {
        messageElement.parent().addClass('show-error');
        e.preventDefault();
        showError = true;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        emailElement.parent().addClass('show-error');
        e.preventDefault();
        showError = true;
    }

    if (message.length < 10) {
        messageElement.parent().addClass('show-error');
        messageElement.parent().find('.show-error').text('작은 메시지를 남겨주세요');
        e.preventDefault();
        showError = true;
    }

    if (showError) {
        // Scroll the form into view
        $('html, body').animate(
            {
                scrollTop: (contactForm as any).offset().top - 200
            },
            500
        );

        alertElement.html('필수 입력란을 모두 작성해 주세요.').fadeIn(2000);

        return;
    }

    // If all validation passes, submit the contactForm
    alertElement.hide();
    submitButton.addClass('jc-button--loading');

    $('.show-error').hide();

    $.ajax({
        url: `${globalVariables.themeRestUrl}/contact-form`,
        type: 'POST',
        headers: {
            'X-WP-NONCE': globalVariables.nonce
        },
        data: JSON.stringify({
            name,
            company,
            email,
            phone,
            message
        }),
        complete: function () {
            submitButton.removeClass('jc-button--loading');
        },
        success: function (response) {
            contactForm.removeClass('grid').addClass('hidden');
            thankYouContainer.fadeIn(2000);
            $('html, body').animate(
                {
                    scrollTop: (thankYouContainer as any).offset().top - 400
                },
                500
            );
        },
        error: function (error) {
            alertElement.html(error.responseJSON.data.message).fadeIn(2000);
            console.error(error);
        }
    });
});

contactForm.on('submit', e => {
    e.preventDefault();
});
