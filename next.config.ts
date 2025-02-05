import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Eğer başka bir domain varsa buraya ekleyebilirsin.
  },
};

export default nextConfig;
