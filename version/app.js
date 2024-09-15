const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 2 of the app. Hi Shiena Mae Gestoso!' + '\n';

    //send the response to the client
    res.send(response);

});

app.get('/shiena', function (req, res) {
  response = 'I love you so much! Will you marry me? <3' + '\n';

    //send the response to the client
    res.send(response);
});

app.get('/janette', function (req, res) {
  response = 'Wag mo sasabihin kay imim, kasi surprisa ku sa kaniya' + '\n';

    //send the response to the client
    res.send(response);
});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
