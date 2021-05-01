const path = require('path');
module.exports = {
  mode: 'development',

  entry: {
    app: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: "/js/",
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    host: "0.0.0.0",
  },
  module: {
    rules: [
      {
        test:/\.ts$/, loader: 'ts-loader'
      }
    ]
  }
}
