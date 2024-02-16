/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "139.59.41.77",
        port: "",
        pathname: "/storage/images/**",
      },
    ],
  },
};

export default nextConfig;
