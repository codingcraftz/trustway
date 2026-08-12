/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  async redirects() {
    return [
      {
        source: '/experts/park-jun-young',
        destination: '/experts',
        permanent: true,
      },
      {
        source: '/experts/park-jun-young/:path*',
        destination: '/experts',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
