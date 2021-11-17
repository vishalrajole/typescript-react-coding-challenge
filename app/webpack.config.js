const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  public: path.resolve("public"),
  entry: path.resolve("src/boot.tsx"),
  html: path.resolve("public/index.html"),
  src: path.resolve("src"),
  assets: path.resolve("assets"),
};

module.exports = {
  devServer: {
    port: 8082,
    historyApiFallback: true,
    contentBase: paths.public,
    proxy: {
      "/api": "http://localhost:8083",
    },
  },
  devtool: "source-map",
  mode: "development",

  entry: paths.entry,

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      src: paths.src,
      assets: paths.assets,
    },
  },

  output: {
    filename: "[name].[chunkhash:8].js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.html,
    }),
  ],
};
