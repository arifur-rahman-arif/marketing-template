const newsLetterForm = $('#news-letter-form');
// const reloadButton = $('.reload-button');
const newLetterSubmitButton = $('#news-letter  #newsletter-form-submit');
const newsLetterThankYou = $('#news-letter .thank-you');
const newLetterAlertElement = $('#news-letter .alert-message');

const nameElement = newsLetterForm.find('#name');
const companyElement = newsLetterForm.find('#company');
const emailElement = newsLetterForm.find('#email');
const phoneElement = newsLetterForm.find('#phone');
const messageElement = newsLetterForm.find('#message');

function removeShowErrorOnChange() {
    const inputs = [nameElement, companyElement, emailElement, messageElement];

    inputs.forEach(input => {
        input.on('input', function () {
            $(this).parents('.input-container').removeClass('show-error');
        });
    });
}

removeShowErrorOnChange();

$(document).on('click', '#newsletter-form-submit', e => {
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

    if (showError) return;

    // If all validation passes, submit the form
    newLetterAlertElement.hide();
    newLetterSubmitButton.addClass('jc-button--loading');

    $('.show-error').hide();

    $.ajax({
        url: `${globalVariables.themeRestUrl}/news-letter`,
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
            newLetterSubmitButton.removeClass('jc-button--loading');
        },
        success: function (response) {
            $('html, body').animate(
                {
                    scrollTop: (newsLetterForm as any).offset().top - 200
                },
                500
            );
            newsLetterForm.removeClass('grid').addClass('hidden');
            newsLetterThankYou.fadeIn(2000);
        },
        error: function (error) {
            newLetterAlertElement.html(error.responseJSON.data.message).fadeIn(2000);
            console.error(error);
        }
    });
});

newsLetterForm.on('submit', e => {
    e.preventDefault();
});

// form.on('submit', e => {
//     e.preventDefault();
// });

// reloadButton.on('click', () => {
//     form.find('input, textarea').val('');
//     form.removeClass('hidden').addClass('grid');
//     newsLetterThankYou.removeClass('grid').hide();
// });
