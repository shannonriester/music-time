const webpack = require('webpack');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const config = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  watch: true,
  watchOptions: {
    ignored: ['node_modules', './public/bundle/']
  },
	// entry: './src/app.js',
  // devServer: {
  //   contentBase: './dist',
  // },
  // output: {
	// 	path: path.join(__dirname, 'public'),
  //   publicPath: '/',
  //   filename: 'bundle.js',
  //   // path: path.resolve(__dirname, 'dist'),
  //   // filename: '[name].bundle.js',
	// },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
					loader: "babel-loader"
				},
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ],
        include: /\.module\.css$/
      }
    ]
  },
  resolve: {
    extensions: [
			'*',
      '.js',
      '.jsx'
    ]
	},
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new FileManagerPlugin({
      onEnd: {
        copy: [
          { source: './dist/main.bundle.js', destination: './src/public/bundle/main.bundle.js' }
        ]
      },
    })
  ]
};

module.exports = config;