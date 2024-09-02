const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node', // Ensure Webpack knows this is for a Node.js environment
  mode: 'production'
};
