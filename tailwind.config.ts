import type { Config } from "tailwindcss";

const config: Config = {
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
    },
    extend: {
      textColor: {
        gray: {
          dark: {
            primary: "--dark-gray-primary",
            secondary: "--dark-gray-secondary",
            tertiary: "--dark-gray-tertiary",
            quartenary: "--dark-gray-quartenary",
          },
          light: {
            secondary: "--light-gray-secondary",
          },
        },
        primary: {
          default: "--primary",
          lighter: "--primary-lighter",
        },
        error: {
          dark: "--dark-red",
        },
        sucess: {
          dark: "--dark-green",
        },
        information: {
          dark: "--dark-blue",
        },
      },

      backgroundColor: {
        primary: {
          default: "--primary",
          darker: "--primary-darker",
          lighter: "--primary-lighter",
        },
        secondary: {
          default: "--secondary",
          darker: "--secondary-darker",
          lighter: "--secondary-lighter",
        },
        error: {
          dark: "--dark-red",
          semidark: "--semidark-red",
          medium: "--medium-red",
          light: "--light-red",
        },
        sucess: {
          dark: "--dark-green",
          semidark: "--semidark-green",
          medium: "--medium-green",
          light: "--light-green",
        },
        information: {
          dark: "--dark-blue",
          semidark: "--semidark-blue",
          medium: "--medium-blue",
          light: "--light-blue",
        },
        Alert: {
          dark: "--dark-yellow",
          semidark: "--semidark-yellow",
          medium: "--medium-yellow",
          light: "--light-yellow",
        },
        gray: {
          dark: {
            secondary: "--dark-gray-secondary",
            quartenary: "--dark-gray-quartenary",
          },
          light: {
            tertiary: "--light-gray-tertiary",
            quartenary: "--light-gray-quartenary",
            quintenary: "--dark-gray-quintenary",
          },
        },
      },

      borderColor: {
        gray: {
          dark: {
            tertiary: "--dark-gray-tertiary",
            quartenary: "--dark-gray-quartenary",
          },
          light: {
            tertiary: "--light-gray-tertiary",
            quartenary: "--light-gray-quartenary",
          },
        },
        primary: {
          outline: "--primary-outline",
        },
        secondary: {
          default: "--secondary",
        },
        information: {
          dark: "--dark-blue",
        },
        sucess: {
          dark: "--dark-green",
        },
        Alert: {
          dark: "--dark-yellow",
        },
      },
    },
  },
  plugins: [],
};
export default config;
