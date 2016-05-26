var path = require('path');
var express = require('express');

var app = express();

app.use('/', express.static(path.join(__dirname, 'client')));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on port: ", port);
});
