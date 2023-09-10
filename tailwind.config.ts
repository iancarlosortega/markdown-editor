import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#e46643',
				'secondary-dk': '#151619',
				secondary: '#212529',
				'secondary-lt': '#343a40',
				'secondary-ltr': '#495057',
				'secondary-ltst': '#adb5bd',
			},
			transitionTimingFunction: {
				slow: 'cubic-bezier(.215,.61,.355,1)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
