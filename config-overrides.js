const path = require('path');

module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "process": require.resolve("process/browser")
    };

    // Optional: Add alias for `process` module
    config.resolve.alias = {
      ...config.resolve.alias,
      process: require.resolve('process/browser')
    };

    return config;
  }
};
