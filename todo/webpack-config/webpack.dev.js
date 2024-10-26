const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name : 'todo',
      filename : 'remoteEntry.js',
      exposes : {
        //mount is exported from bootstrap not index
        './todoIndex' : './src/bootstrap.js'
      }
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
