/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: "linear-gradient(90deg, #3BA466 0%, #5AB251 100%);",
					dark: "rgba(90, 178, 81, 1)",
					muted: "rgba(240, 244, 248, 1)",
					lighty:	"rgba(59, 164, 102, 1)"
				}
			}
		}
	},
	plugins: []
}


