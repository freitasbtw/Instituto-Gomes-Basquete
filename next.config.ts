import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.50.22.173"],
  devIndicators: false,
  reactCompiler: true,
};

export default nextConfig;
