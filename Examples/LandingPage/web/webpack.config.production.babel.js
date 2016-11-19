import path from 'path'
import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import ReactOmniPlugin from 'react-omni-webpack-plugin'

const DIRECTORY = path.join(__dirname)

export default {
  entry: [
    path.join(DIRECTORY, '../index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  output: {
    path: path.join(DIRECTORY, '/dist/'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlPlugin(),
    new ReactOmniPlugin()
  ]
}
