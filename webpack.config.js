var path = require('path');

module.exports = {
  entry: __dirname + '/dev/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    inline: true,
    port: 3001
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exlude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  }
};