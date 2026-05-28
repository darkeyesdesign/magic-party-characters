/** @type {import('next').NextConfig} */
const repo = 'magic-party-characters'

const nextConfig = {
  reactStrictMode: true,
	output: 'export',
	images: {
		unoptimized: true,
	},
	generateEtags: false, // prevents Github from thinking nothing has changed

  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
}

/* I clearly have to do something just so GitHub will fucking work */
module.exports = nextConfig
