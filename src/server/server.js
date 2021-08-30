/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable indent */
/* eslint-disable global-require */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
import getManifest from './getManifest';

import cookieParser from 'cookie-parser';
import boom from '@hapi/boom';
import passport from 'passport';
import axios from 'axios';
import initialState from '../frontend/initialState';
import Layout from '../frontend/components/Layout';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Basic Strategy
require('./utils/auth/strategies/basic');

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);

  const serverConfig = {
    serverSideRender: true,
    publicPath: webpackConfig.output.publicPath,
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['vendors.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return `
  <!DOCTYPE html>
  <html lang="es-ES">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href=${mainStyles}  rel="stylesheet" type="text/css">
    <title>PlatziVideo</title>
  </head>
  <body>
    <div id="App">${html}</div>
    <script>window.__PRELOADED_STATE__ = ${JSON.stringify(
      preloadedState
    ).replace(/</g, '\\u003c')}</script>
    <script src=${mainBuild} type="text/javascript"></script>
    <script src=${vendorBuild} type="text/javascript"></script>
  </body>
  </html>
  `;
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>{renderRoutes(serverRoutes)}</Layout>
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post('/auth/sign-in', async function (req, res, next) {
  passport.authenticate('basic', function (err, data) {
    const { rememberMe } = req.body;

    console.log(data);
    try {
      if (err || !data) {
        next(boom.unauthorized());
      }
      const { token, ...user } = data;

      req.login(data, { session: false }, async function (err) {
        if (err) {
          next(err);
        }

        res.cookie('token', token, {
          httpOnly: !config.dev,
          secure: !config.dev,
          maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC,
        });

        res.status(200).json(user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async function (req, res, next) {
  const { body: user } = req;
  debugger;
  try {
    const userData = await axios({
      url: `${process.env.API_URL}/api/auth/sing-up`,
      method: 'post',
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      },
    });
    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.id,
    });
  } catch (error) {
    next(error);
  }
  console.log(userData);
});

console.log(process.env.API_URL);

app.get('*', renderApp);

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server running on http://localhost:${PORT}`);
});
