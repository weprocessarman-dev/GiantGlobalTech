/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['prod.spline.design'],
  },
  experimental: {
    esmExternals: 'loose',
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://elevenlabs.io https://*.elevenlabs.io https://prod.spline.design; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://elevenlabs.io https://*.elevenlabs.io https://prod.spline.design https://va.vercel-scripts.com blob: data:; connect-src 'self' https://prod.spline.design https://*.spline.design https://api.elevenlabs.io https://api.us.elevenlabs.io https://*.elevenlabs.io wss://api.us.elevenlabs.io wss://*.elevenlabs.io blob: data:;"
          }
        ],
      },
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

export default nextConfig
