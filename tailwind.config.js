module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./sections/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				"fade-in-out": "fadeInOut 4s ease-in-out forwards",
				"fade-out": "fadeOut 1s ease-in-out forwards 3s",
				"slide-right": "slideRight 0.3s ease 2.7s forwards",
				"clip-path": "clipPathRight 0.3s ease 2.7s forwards",
			},
			keyframes: {
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				fadeInOut: {
					"0%": { opacity: 0 },
					"60%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				slideRight: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(90px)" },
				},
				clipPathRight: {
					"0%": { clipPath: "inset(0)" },
					"100%": { clipPath: "inset(0 0 0 100%)" },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
