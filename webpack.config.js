var path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
};

/*

var webpack = require("webpack");
Throws an Error
Error: webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead.

plugins: [
  new webpack.optimize.UglifyJsPlugin({
    // Nothing for now ...
  }),
]


Solution 01 : Use webpack optimization

optimization: {
        minimize: false,
 }

*/
