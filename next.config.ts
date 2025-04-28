import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'], // <-- allow this domain
  },
};

export default nextConfig;
