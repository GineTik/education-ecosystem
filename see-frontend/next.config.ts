import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cabinet.nau.edu.ua",
      },
    ],
  },
};

export default nextConfig;
