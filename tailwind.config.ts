function toRgba(cssVariable: any) {
  const color = `var(${cssVariable})`;
  return ({ opacityValue }: any) => `rgba(${color}, ${opacityValue})`;
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "32px",
      title1: "40px",
      title2: "60px",
    },
    extend: {
      textColor: {
        gray: {
          dark: {
            primary: toRgba("--dark-gray-primary") /*42, 42, 42*/,
            secondary: toRgba("--dark-gray-secondary") /*79, 78, 78*/,
            tertiary: toRgba("--dark-gray-tertiary") /*126, 123, 123*/,
            quartenary: toRgba("--dark-gray-quartenary") /*164, 161, 161*/,
          },
          light: {
            secondary: toRgba("--light-gray-secondary") /*225, 221, 221*/,
          },
        },
        primary: {
          default: toRgba("--primary") /*237, 5, 144*/,
          lighter: toRgba("--primary-lighter") /*255, 67, 180*/,
        },
        error: {
          dark: toRgba("--dark-red") /*237, 5, 61*/,
        },
        success: {
          dark: toRgba("--dark-green") /*1, 171, 79*/,
        },
        information: {
          dark: toRgba("--dark-blue") /*23, 140, 190*/,
        },
      },

      backgroundColor: {
        primary: {
          default: toRgba("--primary") /*237, 5, 144*/,
          darker: toRgba("--primary-darker") /*207, 3, 126*/,
          lighter: toRgba("--primary-lighter") /*255, 67, 180*/,
        },
        secondary: {
          default: toRgba("--secondary") /*66, 9, 225*/,
          darker: toRgba("--secondary-darker") /*49, 1, 184*/,
          lighter: toRgba("--secondary-lighter") /*107, 54, 255*/,
        },
        error: {
          dark: toRgba("--dark-red") /*237, 5, 61*/,
          semidark: toRgba("--semidark-red") /*239, 34, 84*/,
          medium: toRgba("--medium-red") /*242, 89, 126*/,
          light: toRgba("--light-red") /*249, 202, 213*/,
        },
        sucess: {
          dark: toRgba("--dark-green") /* */,
          semidark: toRgba("--semidark-green") /* */,
          medium: toRgba("--medium-green") /* */,
          light: toRgba("--light-green") /* */,
        },
        information: {
          dark: toRgba("--dark-blue") /*1, 171, 79*/,
          semidark: toRgba("--semidark-blue") /*32, 181, 100*/,
          medium: toRgba("--medium-blue") /*81, 197, 134*/,
          light: toRgba("--light-blue") /*202, 236, 218*/,
        },
        Alert: {
          dark: toRgba("--dark-yellow") /*240, 204, 13*/,
          semidark: toRgba("--semidark-yellow") /*242, 212, 56*/,
          medium: toRgba("--medium-yellow") /*244, 221, 100*/,
          light: toRgba("--light-yellow") /*248, 237, 181*/,
        },
        gray: {
          dark: {
            secondary: toRgba("--dark-gray-secondary") /*79, 78, 78*/,
            quartenary: toRgba("--dark-gray-quartenary") /*164, 161, 161*/,
          },
          light: {
            tertiary: toRgba("--light-gray-tertiary") /*236, 234, 234*/,
            quartenary: toRgba("--light-gray-quartenary") /*243, 242, 242*/,
            quintenary: toRgba("--dark-gray-quintenary") /*252, 251, 251*/,
          },
        },
      },

      borderColor: {
        gray: {
          dark: {
            tertiary: toRgba("--dark-gray-tertiary") /*126, 123, 123*/,
            quartenary: toRgba("--dark-gray-quartenary") /*164, 161, 161*/,
          },
          light: {
            tertiary: toRgba("--light-gray-tertiary") /*236, 234, 234*/,
            quartenary: toRgba("--light-gray-quartenary") /*243, 242, 242*/,
          },
        },
        primary: {
          outline: toRgba("--primary-outline") /*225, 9, 139*/,
        },
        secondary: {
          default: toRgba("--secondary") /*66, 9, 225*/,
        },
        information: {
          dark: toRgba("--dark-blue") /*23, 140, 190*/,
        },
        sucess: {
          dark: toRgba("--dark-green") /*1, 171, 79*/,
        },
        Alert: {
          dark: toRgba("--dark-yellow") /*240, 204, 13*/,
        },
      },
    },
  },
  plugins: [],
};
