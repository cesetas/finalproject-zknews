/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  webpack5: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          global: "global",
        })
      );

      config.resolve.fallback = {
        fs: false,
        stream: false,
        crypto: false,
        os: false,
        readline: false,
        ejs: false,
        assert: require.resolve("assert"),
        path: false,
      };

      return config;
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

// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//   if (!isServer) {
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         global: "global",
//       })
//     );

//     config.resolve.fallback = {
//       fs: false,
//       stream: false,
//       crypto: false,
//       os: false,
//       readline: false,
//       ejs: false,
//       assert: require.resolve("assert"),
//       path: false,
//     };
//     config.experiments = { asyncWebAssembly: true };

//     return config;
//   }

//   return config;
// },
// };
