import Self from "../../../src";

module.exports = {
  entry: "./index.js",
  experiments: {
    layers: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [Self.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new Self({
      filename: "[name].css",
    }),
  ],
};
