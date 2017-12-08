/* eslint no-console: 0 */


const config = require('../config')
const path = require('path');
const express = require('express');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = 3001;
const app = express();

const staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)

app.use(express.static('./dist'));

//app.use(staticPath, express.static('./static'));

app.get('*', function response(req, res) {
  //res.sendFile("index.html", {"root": __dirname});
  res.sendFile("index.html", {'root': './dist/'});
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});