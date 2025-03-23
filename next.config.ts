import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Optional: Enable if you need SWC replacement
    // swcTraceProfiling: true
  },
  // Optional: Add output standalone for Docker deployments
  output: 'standalone',
  // Enable React Strict Mode
  reactStrictMode: true,
  // Configure other features as needed
  images: {
    domains: ['media-del1-2.cdn.whatsapp.net'], // Add your image domains
  },
  // Enable TypeScript type checking in development
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Webpack customization (optional)
  webpack: (config) => {
    return config;
  }
};

export default nextConfig;