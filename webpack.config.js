const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    aboutYou: './src/aboutYou.js'},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true
}