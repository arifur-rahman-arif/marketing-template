/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./**/*.html', './**/*.ts', './**/*.js', './**/*.tsx', '!./src/**/node_modules/**/*.{html,js,ts}', '!./vender/**/*.{html,js,ts}', '!./dist/**/*.{html,js,ts}'],
    autoprefixer: {},
    theme: {
        extend: {
            colors: {
                gray: {
                    80: 'var(--Gray-80)',
                    70: 'var(--Gray-70)',
                    60: 'var(--Gray-60)',
                    40: 'var(--Gray-40)',
                    20: 'var(--Gray-20)',
                    10: 'var(--Gray-10)',
                    0: 'var(--Gray-00)',
                },
                white: 'var(--White)',
                primary: {
                    100: 'var(--P-100)',
                    50: 'var(--P-50)',
                },
                secondary: {
                    lightCream: 'var(--S-Light-Cream)',
                    lightGrayBeige: 'var(--S-Light-Gray-Beige)',
                    paleIvory: 'var(--S-Pale-Ivory)',
                    softPeach: 'var(--S-Soft-Peach)',
                },
                tinted: {
                    aquaGreen: 'var(--T-Aqua-Green)',
                    dustyBlue: 'var(--T-Dusty-Blue)',
                    freshGreen: 'var(--T-Fresh-Green)',
                    rosePink: 'var(--T-Rose-Pink)',
                    sageGreen: 'var(--T-Sage-Green)',
                    skyBlue: 'var(--T-Sky-Blue)',
                    softBeige: 'var(--T-Soft-Beige)',
                },
                success: {
                    150: 'var(--Success-150)',
                    100: 'var(--Success-100)',
                },
                warning: {
                    150: 'var(--Warning-150)',
                    100: 'var(--Warning-100)',
                },
                alert: {
                    150: 'var(--Alert-150)',
                    100: 'var(--Alert-100)',
                },
                mfsLogo: {
                    orange: 'var(--MFS-Logo-Orange)',
                    grey01: 'var(--MFS-Logo-Grey-01)',
                    grey02: 'var(--MFS-Logo-Grey-02)',
                },
                sg: {
                    red: 'var(--SG-Red)',
                    white: 'var(--SG-White)',
                },
            },
            fontFamily: {
                sans: ['Livvic', 'sans-serif', 'serif'], // Use 'Livvic' as default sans font
            },
            fontWeight: {
                100: 'var(--100)',     // Use custom variable for 100 weight
                200: 'var(--200)',     // Use custom variable for 200 weight
                300: 'var(--300)',     // Use custom variable for 300 weight
                400: 'var(--400)',     // Use custom variable for 400 weight
                500: 'var(--500)',     // Use custom variable for 500 weight
                600: 'var(--600)',     // Use custom variable for 600 weight
                700: 'var(--700)',     // Use custom variable for 700 weight
                900: 'var(--900)',     // Use custom variable for 900 weight
            },
            screens: {
                xs: '400px'
            },
            boxShadow: {
                shadow1: 'var(--Shadow-1)',
                shadow2: 'var(--Shadow-2)',
                shadow3: 'var(--Shadow-3)',
                shadow4: 'var(--Shadow-4)',
                shadow5: 'var(--Shadow-5)',
                shadow6: 'var(--Shadow-6)',
            },
            borderRadius: {
                none: 'var(--Border-Radius-border-radius-none)',
                xxsmall: 'var(--Border-Radius-border-radius-xxsmall)',
                xsmall: 'var(--Border-Radius-border-radius-xsmall)',
                small: 'var(--Border-Radius-border-radius-small)',
                medium: 'var(--Border-Radius-border-radius-medium)',
                large: 'var(--Border-Radius-border-radius-large)',
                xlarge: 'var(--Border-Radius-border-radius-xlarge)',
                round: 'var(--Border-Radius-border-radius-round)',
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')]
};
