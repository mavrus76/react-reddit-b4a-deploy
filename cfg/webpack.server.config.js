const path = require('path');
const { DefinePlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');

const imageminGifsicle = require('imagemin-gifsicle');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const imageminMozjpeg = require('imagemin-mozjpeg');

const { NODE_ENV } = process.env;
const IS_DEV = NODE_ENV === 'development';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const COMMON_PLUGINS = [
  new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }),
];

module.exports = {
  target: 'node',
  mode: NODE_ENV || 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  externals: [nodeExternals()],
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
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              onlyLocals: true,
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader'],
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
  optimization: {
    minimize: false,
  },
  devtool: IS_DEV ? 'eval' : false,
  plugins: COMMON_PLUGINS,
};
