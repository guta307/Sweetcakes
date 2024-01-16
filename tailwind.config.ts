import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /*Brand colors*/

        primary: "--primary",
        primary_darker: "--primary-darker",
        primary_lighter: "--primary-lighter",

        secondary: "--secondary",
        secondary_darker: "--secondary-darker",
        secondary_lighter: "--secondary-lighter",

        /*--Brand colors--*/

        /*Text & Background*/

        /*Dark gray*/
        dark_gray_primary: "--dark-gray-primary",
        dark_gray_secondary: "--dark-gray-secondary",
        dark_gray_tertiary: "--dark-gray-tertiary",
        dark_gray_quartenary: "--dark-gray-quartenary",
        dark_gray_quintenary: "--dark-gray-quintenary",
        /*--Dark gray--*/

        /*Light gray*/
        light_gray_primary: "--light-gray-primary",
        light_gray_secondary: "--light-gray-secondary",
        light_gray_tertiary: "--light-gray-tertiary",
        light_gray_quartenary: "--light-gray-quartenary",
        light_gray_quintenary: "--light-gray-quintenary",
        /*--Light gray--*/
        /*--Text & Background--*/

        /*Custom colors*/

        /*Red*/
        dark_red: "--dark-red",
        semidark_red: "--semidark-red",
        medium_red: "--medium-red",
        semilight_red: "--semilight-red",
        light_red: "--light-red",
        /*--Red--*/

        /*green*/
        dark_green: "--dark-green",
        semidark_green: "--semidark-green",
        medium_green: "--medium-green",
        semilight_green: "--semilight-green",
        light_green: "--light-green",
        /*--green--*/

        /*yellow*/
        dark_yellow: "--dark-yellow",
        semidark_yellow: "--semidark-yellow",
        medium_yellow: "--medium-yellow",
        semilight_yellow: "--semilight-yellow",
        light_yellow: "--light-yellow",
        /*--yellow--*/

        /*blue*/
        dark_blue: "--dark-blue",
        semidark_blue: "--semidark-blue",
        medium_blue: "--medium-blue",
        semilight_blue: "--semilight-blue",
        light_blue: "--light-blue",
        /*--blue--*/

        /*--Custom colors--*/
      },
    },
  },
  plugins: [],
};
export default config;
