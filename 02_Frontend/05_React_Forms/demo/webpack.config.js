module.exports = {
  entry: ["./client/src/index.js"],
  output: {
    path: __dirname,
    filename: "./client/public/bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
