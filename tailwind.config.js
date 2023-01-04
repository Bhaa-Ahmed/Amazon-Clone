/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false,
	theme: {
		extend: {
			amazon_blue: {
				light: "#232F3E",
				DEFAULT: "#131921",
			},
		},
	},
	plugins: [],
};