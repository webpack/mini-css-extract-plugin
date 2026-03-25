import Self from "../../../src";

module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        resourceQuery: { not: /query/ },
        use: [Self.loader, "css-loader"],
      },
      {
        test: /\.css$/,
        resourceQuery: /query/,
        use: [
          Self.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: /\.css$/,
        type: "asset/resource",
        generator: {
          filename: "static/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new Self({
      filename: "[name].css",
    }),
  ],
};
