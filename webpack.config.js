var path = require("path");

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
    minimize: false,
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
