const path = require("path")
const webpack = require("webpack")

module.exports = {
  name: "gugudan-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", "jsx"]
  },
  entry: {
    app: ["./client.jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        test: /\.css?$/,
        loader: "css-loader"
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
}
