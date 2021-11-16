module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"dark-maroon": "#5b161b",
				"off-white": "#f5f4f2",
				"light-pink": "#e9c5c5",
				"accent-yellow": "#f1b814",
				"darker-maroon": "#330b0e",
				"light-maroon": "#8c5b5e",
			},
		},
	},
	variants: {
		extend: {
			border: ["hover"],
		},
	},
	plugins: [],
}
