
var path = require('path');

module.exports = {
  entry: './server/app.js',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  }
};