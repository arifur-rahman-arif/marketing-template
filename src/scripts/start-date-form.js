import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

class StartDateForm {
    constructor() {
        this.form = $('.registration-start-date-form');
        this.initializeDatepicker();
        this.handleFormSubmit();
    }

    /**
     * Initializes date pickers for check-in and check-out inputs within the given form.
     *
     * @param {HTMLElement} form - The form element containing the check-in and check-out input fields.
     *
     * This function sets up Flatpickr date pickers on check-in and check-out inputs, enforcing
     * locale settings for weekdays and months. The check-out date is constrained to be at least
     * one day after the selected check-in date. If a user selects a check-out date earlier than
     * the check-in date, the check-out date is reset. The date format is set to 'd / m / Y', and
     * mobile date pickers are disabled to ensure consistent behavior across devices.
     */

    initializeDatepicker = () => {
        if (!this.form) return;

        const startDate = this.form.find('#start-date');

        if (!startDate) return;

        const defaultSettings = {
            locale: {
                firstDayOfWeek: 0
            },
            dateFormat: 'j F Y',
            minDate: 'today',
            disableMobile: true
        };

        // Initialize Check-in Date Picker
        flatpickr(startDate, {
            ...defaultSettings,
            onChange: function (selectedDate) {
                if (selectedDate.length > 0) {
                    startDate.attr(
                        'value',
                        selectedDate[0].toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    );
                }
            }
        });
    };

    handleFormSubmit = () => {
        this.form.on('submit', e => {
            e.preventDefault();
            const startDateElement = this.form.find('#start-date');
            const startDate = startDateElement.val();

            if (!startDate) {
                this.showError(startDateElement);
                return;
            }

            console.log(startDate);

            // Scroll to a specific section after form submission
            $('html, body').animate(
                {
                    scrollTop: $('#registration-form').offset().top
                },
                1000
            );
        });
    };

    showError = element => {
        element.parents('.form-input').addClass('form-input--invalid');
    };
}

export default StartDateForm;
