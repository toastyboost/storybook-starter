module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "~": path.resolve(__dirname, "../src")
  };

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("ts-loader")
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
