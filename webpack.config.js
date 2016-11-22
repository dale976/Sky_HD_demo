var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }, {
      test: /\.json$/, loader: 'json-loader'
    },{
      test: /\.scss$/,
      include: /src/,
      loaders: ['style', 'css', 'sass']
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  node: {
    fs: 'empty',
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

  plugins: [
      new ExtractTextPlugin('src/styles/style.css', {
          allChunks: true
      })
    ]
};
