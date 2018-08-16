module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname+'/dist',
    filename:'main.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  // sourceMap: true
}