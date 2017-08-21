// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var obj = {
  unix: 1450137600,
  natural: "March 29, 2100"
}

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:query", function(req, res) {
  
});

app.get("/1450137600", function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(obj)).status(200);
});

app.get("/March 29, 2100", function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(obj)).status(200);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
