const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: {
    startfile: "./src/start.js",
    sharedlib_mf: "./src/index.ts"
  },
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name]-bundle.js",
    clean: true,
  },
  target: "web",
  devServer: {
    port: "5003",
    static: {
      directory: path.join(__dirname, "src"),
    },
    historyApiFallback: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sharedlibMFE',
      filename: 'remoteEntry.js',
      exposes: {
        './theme': './src/themeProvider/Theme',
        "./SharedButton": './src/components/SharedButton',
        "./eventservice": './src/eventservice/eventservice'
      },
      shared: {
        ...deps,
        'react': { singleton: true, requiredVersion: deps['react']},
        'react-dom': { singleton: true, requiredVersion: deps['react-dom']}
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
