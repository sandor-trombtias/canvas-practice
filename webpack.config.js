var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
				test: /\.js$/, // include .js files
				enforce: "pre", // preload the jshint loader
				exclude: /node_modules/, // exclude any and all files in the node_modules folder
				use: [
					{
						loader: "jshint-loader"
					}
				]
			},
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
}
