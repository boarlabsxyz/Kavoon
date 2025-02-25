/**
 * @type {import('next').NextConfig}
 */
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com', 'gitlab.com'],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  sentry: {
    hideSourceMaps: true,
  },
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
