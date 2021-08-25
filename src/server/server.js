import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import Layout from '../frontend/components/Layout';
import React from 'react';
import { renderToString } from 'react-dom/server';
import initialState from '../frontend/initialState';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

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
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.expectCt());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.referrerPolicy());
  app.use(helmet.xssFilter());
}

const setResponse = (html, preloadedState) => {
  return `
  <!DOCTYPE html>
  <html lang="es-ES">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/app.css"  rel="stylesheet" type="text/css">
    <title>PlatziVideo</title>
  </head>
  <body>
    <div id="App">${html}</div>
    <script>window.__PRELOADED_STATE__ = ${JSON.stringify(
      preloadedState
    ).replace(/</g, '\\u003c')}</script>
    <script src="assets/app.js" type="text/javascript"></script>
  </body>
  </html>
  `;
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.utl} context={{}}>
        <Layout>{renderRoutes(serverRoutes)}</Layout>
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server running on http://localhost:${PORT}`);
});
