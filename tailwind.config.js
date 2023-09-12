/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#ac4949",
				secondary: "#922b2b",
			},
		},
	},
	plugins: [],
};
