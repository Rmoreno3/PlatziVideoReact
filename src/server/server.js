import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  // const { publicPath } = webpackConfig.output;
  const serverConfig = {
    serverSideRender: true,
    publicPath: webpackConfig.output.publicPath,
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="es-ES">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/16d9e60b55.js" crossorigin="anonymous"></script>
    <link href="assets/app.css"  rel="stylesheet" type="text/css">
    <title>PlatziVideo</title>
  </head>
  <body>
    <div id="App"></div>
    <script src="assets/app.js" type="text/javascript"></script>
  </body>
  </html>
  `);
});

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server running on http://localhost:${PORT}`);
});
