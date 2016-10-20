// https://github.com/shelljs/shelljs
require('shelljs/global');
env.NODE_ENV = 'production'

var fs = require('fs')
var path = require('path')
var express = require('express')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var opn = require('opn')
var app = express()
var port = process.env.PORT || config.build.port
var proxyTable = config.dev.proxyTable

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(context, options))
});

// mock api requests
var mockDir = path.resolve(__dirname, '../mock');
fs.readdirSync(mockDir).forEach(function (file) {
  var mock = require(path.resolve(mockDir, file));
  app.use(mock.api, mock.response);
});

// serve pure static assets
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static(path.resolve(__dirname, '../dist/static')))

app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'), {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  });
});

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Build server listening at ' + uri + '\n')
  opn(uri)
})