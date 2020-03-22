const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [ resolve('src'), resolve('test') ],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: false
  }
})

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    hot: true
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map',

  module: {
    rules: [
      ...[createLintingRule()],
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
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
          'vue-style-loader',
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
              'vue-style-loader',
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

            css: [
              'vue-style-loader',
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
          }
        }
      }
    ],
  },

  plugins: [new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') })]
})
