/**
 * @type {import('next').NextConfig}
 */
// import { withSentryConfig } from '@sentry/nextjs';
// import { config } from 'next/dist/build/templates/pages';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'gitlab.com',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// const sentryWebpackPluginOptions = {
//   silent: true, // Suppresses all logs
// };

export default nextConfig;
//export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
