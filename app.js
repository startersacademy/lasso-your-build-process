'use strict';

var express = require('express');
var compression = require('compression');


var app = express();

app.use(compression());

app.get('/taglib/my-page.html', require('./src/pages/taglib'));
app.use(require('lasso/middleware').serveStatic());

app.use(express.static('./client'));


var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);
});
