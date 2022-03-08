const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src/')
    },
    configure: (config, { env, paths }) => {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tty: require.resolve('tty-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer'),
        path: require.resolve('path-browserify')
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        })
      );

      return config;
    }
  }
};