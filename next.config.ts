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
      {
        source: '/admin/config.yml',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/yaml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/config.yml',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/yaml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
