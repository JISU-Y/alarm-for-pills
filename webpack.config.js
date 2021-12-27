const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const devMode = process.env.NODE_NEV !== "production"

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  devtool: devMode ? "eval-source-map" : false,
  devServer: {
    open: true,
    hot: true,
    client: {
      overlay: true,
      progress: true,
    },
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: ["/node_modules/"],
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-react", { runtime: "automatic" }], "@babel/preset-env"],
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        },
      },
      {
        type: "asset/resource",
        exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/, /^$/],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
    }),
  ],
}
