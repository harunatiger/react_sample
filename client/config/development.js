var webpack = require('webpack');

module.exports = {
  entry: {
    jsx: './src/app.jsx',
  },

  output: {
    path: '../app/assets/javascripts/webpack',
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',
  
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
    ]
  },
  
  plugins: [
    /* DefinePluginの実行 */
    new webpack.DefinePlugin({
      // process.env.NODE_ENVを'production'に置き換える
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    /* UglifyJsPluginの実行 */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // 圧縮する時に警告を除去する
        warnings: false
      }
    })
  ]
}