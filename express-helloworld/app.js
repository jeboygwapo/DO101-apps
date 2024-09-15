var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/jeboy', function (req, res) {
  res.send('Hello Jeboy!\n');
});

app.get('/shiena', function (req, res) {
  res.send('Hello Shiena!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

