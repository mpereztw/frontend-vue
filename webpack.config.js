const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});
module.exports = {
// // This is the "main" file which should include all other modules
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true
  },
  plugins: [htmlPlugin]
};