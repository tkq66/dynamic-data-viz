const path = require('path')
// const webpack = require('webpack')
const context = path.resolve(__dirname, 'src')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  devtool: 'inline-source-map',

  mode: 'development',

  target: 'node', // ignore built-in modules like path, file, etc

  node: {
    __dirname: true // otherwise path gets confused. more @ https://webpack.js.org/configuration/node/#node-__dirname
  },

  externals: [nodeExternals()], // ignore modules in node_modules

  context,

  entry: [
    'babel-polyfill',
    path.resolve(__dirname, path.join('src', 'index.js'))
  ],

  output: {
    path: path.resolve(__dirname, path.join('build', 'dev')),
    filename: '[name].bundle.js'
  },

  resolve: {
    // Look for modules in these places...
    modules: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './src')
    ],

    // Settings so filename extension isn't required when importing.
    extensions: ['.js']
  },

  module: {
    rules: [
      { // Javascript
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: [

          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  }

  // plugins: [
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  //
  // devServer: {
  //   contentBase: path.join(__dirname, 'build', 'dev'),
  //   compress: true,
  //   hotOnly: true,
  //   open: true,
  //   stats: {
  //     colors: true
  //   },
  //   watchOptions: {
  //     aggregateTimeout: 300,
  //     poll: 1000
  //   },
  //   port: 8080
  // }
}
