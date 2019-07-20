const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const serverConfig = {
  entry: "./server/index.ts",
  target: "node",

  mode: "development",
  node: {
    __dirname: false, // if you don't put this is, __dirname
    __filename: false // and __filename return blank or /
  },

  externals: [nodeExternals()],
  watch: true,

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "server", "build")
  }
};

// Combined 'module.exports'
module.exports = [serverConfig];
