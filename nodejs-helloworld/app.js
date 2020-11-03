var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello Shivagami World!\n');
});

app.listen(8080, function () {
  console.log('Example app Shivagami listening on port 8080!');
});

