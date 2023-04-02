/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	env: {
		APP_API_URL: process.env.APP_API_URL
	}
}

module.exports = nextConfig
