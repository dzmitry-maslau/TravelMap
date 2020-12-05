const resolve = require("path").resolve;
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: ["babel-polyfill", "./client/index"],

  output: {
    path: resolve(__dirname, "public"),
    filename: "./bundle.js",
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve(".")],
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/react"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
  },

  // plugins: [
  //   new HtmlWebpackPlugin({ title: "TravelMap" }),
  //   new webpack.EnvironmentPlugin(["MapboxAccessToken"]),
  // ],
};
