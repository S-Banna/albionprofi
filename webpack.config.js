const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  entry: './src/index2.js',
  output: {
    filename: 'main2.js',
    path: path.resolve(__dirname, 'dist'),
  },
};