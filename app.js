var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello world');
});

app.get('/api/v1/:rota', function(req, res) {
  res.status(200).-json({
    params: req.params,
    query: req.query
  });
});

app.listen(8080);