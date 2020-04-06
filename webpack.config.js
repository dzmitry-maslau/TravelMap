const resolve = require("path").resolve;
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    app: resolve("./app.js")
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
              presets: ["@babel/env", "@babel/react"]
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ title: "TravelMap" }),
    new webpack.EnvironmentPlugin(["MapboxAccessToken"])
  ]
};
