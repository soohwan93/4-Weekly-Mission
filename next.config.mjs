/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          native: true,
        },
      },
    ],
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
        port: "",
        pathname: "/badges/**",
      },
    ],
  },
};

export default nextConfig;
