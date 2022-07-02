/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     if (!isServer) {
//       config.plugins.push(
//         new webpack.ProvidePlugin({
//           global: "global",
//         })
//       );

//       config.resolve.fallback = {
//         fs: false,
//         stream: false,
//         crypto: false,
//         os: false,
//         readline: false,
//         ejs: false,
//         assert: require.resolve("assert"),
//         path: false,
//       };

//       return config;
//     }

//     return config;
//   },
// };

// module.exports = nextConfig;

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  webpack5: true,
  reactStrictMode: true,
  webpack: function (config, options) {
    if (!options.isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.stream = false;
      config.resolve.fallback.crypto = false;
      config.resolve.fallback.os = false;
      config.resolve.fallback.readline = false;
      config.resolve.fallback.ejs = false;
      config.resolve.fallback.assert = require.resolve("assert");
      config.resolve.fallback.path = false;
    }
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      layers: true,
    };
    return config;
  },
};

module.exports = nextConfig;
