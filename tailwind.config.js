/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* We  */
/* Tailwind Configuration Docs: https://tailwindcss.com/docs/configuration */

function withOpacityValue(variable) {
  return ({opacityValue}) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        how1: {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1.1)'
          },
          '33%, 66%': {
            opacity: 0.3,
            transform: 'scale(1)'
          },
        },
        how2: {
          '0%, 66%, 100%': {
            opacity: 0.3,
            transform: 'scale(1)'
          },
          '33%': {
            opacity: 1,
            transform: 'scale(1.1)'
          }
        },
        how3: {
          '0%, 33%, 100%': {
            opacity: 0.3,
            transform: 'scale(1)'
          },
          '66%': {
            opacity: 1,
            transform: 'scale(1.1)'
          }
        },
        round1: {
          '0%, 100%': {
            'border-right': '3px solid #973112',
          },
          '33%, 66%': {
            'border-width': 0,
          },
        },
        round2: {
          '0%, 66%, 100%': {
            'border-width': 0,
          },
          '33%': {
            'border-right': '3px solid #973112',
            'border-bottom': '3px solid #973112',
          }
        },
        round3: {
          '0%, 33%, 100%': {
            'border-width': 0,
          },
          '66%': {
            'border': '3px solid #973112',
          }
        },
        image1: {
          '0%, 100%': {
            opacity: 1
          },
          '33%, 66%': {
            opacity: 0
          },
        },
        image2: {
          '0%, 66%, 100%': {
            opacity: 0,
          },
          '33%': {
            opacity: 1,
            transform: 1
          }
        },
        image3: {
          '0%, 33%, 100%': {
            opacity: 0,
          },
          '66%': {
            opacity: 1
          }
        },
        grow: {
          'from':{
            transform: 'scaleY(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        }
      },
      animation: {
        'how1': 'how1 9s ease-in-out infinite',
        'how2': 'how2 9s ease-in-out infinite',
        'how3': 'how3 9s ease-in-out infinite',
        'round1': 'round1 9s ease-in-out infinite',
        'round2': 'round2 9s ease-in-out infinite',
        'round3': 'round3 9s ease-in-out infinite',
        'image1': 'image1 9s ease-in-out infinite',
        'image2': 'image2 9s ease-in-out infinite',
        'image3': 'image3 9s ease-in-out infinite',
      },
      colors: {
        primary: withOpacityValue('--color-primary'),
        contrast: withOpacityValue('--color-contrast'),
        notice: withOpacityValue('--color-accent'),
        theme: 'var(--color-theme)',
        khaki: 'var(--color-khaki)',
        offgrey: 'var(--color-lightgrey)',
        offwhite: 'var(--color-dullwhite)',
        dark: 'var(--color-black)',
        light: 'var(--color-white)',
        shopPay: 'var(--color-shop-pay)',
      },
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        med: {max: '767px'},
        '2xl': '96em',
        'sm-max': {max: '48em'},
        'sm-only': {min: '32em', max: '48em'},
        'md-only': {min: '48em', max: '64em'},
        'lg-only': {min: '64em', max: '80em'},
        'xl-only': {min: '80em', max: '96em'},
        '2xl-only': {min: '96em'},
      },
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--height-nav))',
        'screen-dynamic': 'var(--screen-height-dynamic, 100vh)',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"IBMPlexSerif"', 'Palatino', 'ui-serif'],
        trixie: ['trixie-text-regular', 'sans-serif'],
        alternate: ['alternategotno1d-regular', 'sans-serif'],
      },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
      },
    },
  },
  // eslint-disable-next-line node/no-unpublished-require
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
