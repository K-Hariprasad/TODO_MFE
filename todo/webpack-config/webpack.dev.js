const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "todo",
      filename: "remoteEntry.js",
      exposes: {
        //mount is exported from bootstrap not index
        "./todoIndex": "./src/bootstrap.js",
      },
    }),
  ],
  // this is required to load the nested routes directly eg: http://localhost:8081/product/5
  // if below config not provided browser will make request to http://localhost:8081/product/remoteEntry.js
  output: {
    publicPath: "http://localhost:8081/",
  },
};

module.exports = merge(commonConfig, devConfig);
