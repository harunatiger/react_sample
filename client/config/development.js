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
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
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
  eslint: {
    configFile: './.eslintrc'
  },
}