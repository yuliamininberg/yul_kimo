import type { NextConfig } from 'next';
const nextConfig: NextConfig = { reactStrictMode: true, outputFileTracingRoot: process.cwd(), images: { remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }] } };
export default nextConfig;
