/* global __dirname */
var HappyPack = require('happypack')
var path = require('path')
let config = {
  entry: {
    app: './src/start.js'
  },

  output: {
    path: path.join(__dirname, './public/app/js'),
    filename: '[name].js',
    publicPath: '/'
  },

  watch: true,

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'happypack/loader?id=es2015',
        include: [
          path.resolve(__dirname, './src')
        ]
      },
      {
        test: /\.scss$/,
        loader: 'happypack/loader?id=sass'
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        // Run images and fonts through url-loader
        loader: 'url-loader',
        options: {
          name: '/asset/js/img/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'es2015',
      loaders: [
        'cache-loader',
        {
          loader: 'babel-loader',
          query: {
            plugins: ['transform-runtime', 'transform-object-rest-spread'],
            presets: [
              ['es2015', { 'modules': false }], 'env', 'react', 'stage-0' ]
          }
        }
      ]
    }),
    new HappyPack({
      id: 'sass',
      loaders: ['cache-loader', 'style-loader', 'css-loader', 'sass-loader']
    })
  ]
}

module.exports = config
