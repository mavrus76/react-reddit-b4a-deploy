const path = require('path');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const imageminGifsicle = require('imagemin-gifsicle');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const imageminMozjpeg = require('imagemin-mozjpeg');

const { NODE_ENV } = process.env;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const DEV_PLUGINS = [
  new CleanWebpackPlugin(),
  new HotModuleReplacementPlugin(),
];
const COMMON_PLUGINS = [
  new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }),
];

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
  return false;
}

function getEntry() {
  if (IS_PROD) {
    return path.resolve(__dirname, '../src/client/index.jsx');
  }

  return [
    path.resolve(__dirname, '../src/client/index.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
  ];
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    },
  },
  mode: NODE_ENV || 'development',
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '//localhost:3001/static',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: `[name].[contenthash].[ext]`,
          //     publicPath: 'images',
          //     outputPath: 'images',
          //     useRelativePath: true,
          //     esModule: false,
          //   },
          // },
          'url-loader?limit=10000',
          {
            loader: 'img-loader',
            options: {
              plugins: [
                imageminGifsicle({
                  interlaced: false,
                }),
                imageminMozjpeg({
                  progressive: true,
                  arithmetic: false,
                }),
                imageminPngquant({
                  floyd: 0.5,
                  speed: 2,
                }),
                imageminSvgo({
                  plugins: [{ removeTitle: true }, { convertPathData: false }],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  devtool: setupDevtool(),
  plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
};
