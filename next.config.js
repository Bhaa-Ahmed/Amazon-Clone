/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "links.papareact.com",
				port: "",
				pathname: "/f90",
			},
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
				port: "",
				pathname: "/img/**",
			},
		],
	},
};

module.exports = nextConfig;
