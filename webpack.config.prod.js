const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      }),

      new OptimizeCSSAssetsPlugin({})
    ]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,

          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-nested'),
                require('postcss-css-variables')(),
                require('postcss-preset-env')({
                  stage: 0,
                  features: {
                    'custom-properties': false,
                    'environment-variables': false
                  }
                })
              ]
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              keepQuery: true
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-nested'),
                require('postcss-css-variables')(),
                require('postcss-preset-env')({
                  stage: 0,
                  features: {
                    'custom-properties': false,
                    'environment-variables': false
                  }
                })
              ]
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              keepQuery: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              prependData: '@import \'./src/styles/index.scss\';'
            }
          }
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            scss: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    require('postcss-nested'),
                    require('postcss-css-variables')(),
                    require('postcss-preset-env')({
                      stage: 0,
                      features: {
                        'custom-properties': false,
                        'environment-variables': false
                      }
                    })
                  ]
                }
              },
              {
                loader: 'resolve-url-loader',
                options: {
                  keepQuery: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  prependData: '@import \'./src/styles/index.scss\';'
                }
              }
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    })

    // new BundleAnalyzerPlugin()
  ]
})
