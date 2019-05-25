const path = require('path');
const serverConfig = {
  target: 'node',
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    }]
  }
};

const clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js'
  },
  module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    }]
  }
};

module.exports = [ serverConfig, clientConfig ];