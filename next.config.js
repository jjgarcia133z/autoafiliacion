/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,

		esModuleInterop: true,
		webpack: (config) => {
			config.module.rules.push({
				test: /\.m?js$/,
				resolve: {
					fullySpecified: false,
				},
			})

			return config
		},
	},
}

module.exports = nextConfig
