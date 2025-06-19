import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure static files in public directory are served correctly
  trailingSlash: false,
  // Add headers for admin files
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
