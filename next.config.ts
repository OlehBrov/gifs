import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "giphy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.giphy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.giphy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.klipy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
