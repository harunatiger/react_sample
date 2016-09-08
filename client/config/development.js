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
}