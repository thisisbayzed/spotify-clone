// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]",
          outputPath: "static/media/",
          publicPath: "/_next/static/media/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
