/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          global: "global",
        })
      );

      config.resolve.fallback = {
        fs: false,
        tls: false,
        net: false,
        zlib: false,
        stream: false,
        http: false,
        https: false,
        crypto: false,
        url: false,
        os: false,
        readline: false,
        ejs: false,
        assert: require.resolve("assert"),
        path: false,
      };

      return config;
    }

    return config;
  },
};

module.exports = nextConfig;
