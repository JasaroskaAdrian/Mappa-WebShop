const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
  },
  devServer: {
    static: "./src",
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/*.png", to: "[name][ext]", noErrorOnMissing: true },
        { from: "src/*.jpeg", to: "[name][ext]", noErrorOnMissing: true },
      ],
    }),
  ],
};
