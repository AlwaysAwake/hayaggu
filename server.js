import express from 'express';
import path from 'path';
import compression from 'compression';

import webpack from 'webpack';
import config from './webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(compression());
app.use(express.static(path.resolve(__dirname, './static')));
app.set('views', path.join(__dirname, 'static'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('*', (req, res) => {
  res.render('index.html');
});

app.listen(port, (err) => {
  if (err){
    console.error(err);
  } else {
    console.info('Hayaggu is running on port: ' + port);
  }
});
