const path = require('path');
const express = require('express');
const webpack = require('webpack');
const nodemon = require('nodemon');
const cors = require('cors');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

hmrServer.use(
  cors({
    origin(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }),
);

hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    noInfo: true,
    watchOptions: {
      ignore: '/dist/',
    },
    writeToDisk: true,
    stats: 'errors-only',
  }),
);

hmrServer.use(
  webpackHotMiddleware(clientCompiler, {
    path: '/static/__webpack_hmr',
  }),
);

hmrServer.listen(3001, () => {
  console.log('HMR server successfully started');
});

const compiler = webpack(webpackServerConfig);

compiler.run((err) => {
  if (err) {
    console.log('Compilation failed: ', err);
  }

  // eslint-disable-next-line no-shadow
  compiler.watch({}, (err) => {
    if (err) {
      console.log('Compilation failed: ', err);
    }
    console.log('Compilation was successfully');
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ],
  });
});
