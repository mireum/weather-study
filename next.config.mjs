/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        // destination: "",
        destination: "https://api.vworld.kr",
      },
    ];
  },
};

export default nextConfig;
