const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = env => {
  const plugins = [new ExtractTextPlugin('css/[name].[hash].css')]

  if (process.env.NODE_ENV === 'production') {
    plugins.push(new CleanWebpackPlugin(['dist'], { root: __dirname }))
  }

  return {
    entry: {
      'platzi-video': path.resolve(__dirname, './src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist') + '/',
      chunkFilename: 'js/[id].[chunkhash].js'
    },
    devServer: {
      port: 9000
    },
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/core',
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              }
            ]
          })
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]'
            }
          }
        }
      ]
    },
    plugins
  }
}
