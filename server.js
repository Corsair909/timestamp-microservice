// server.js
// where your node app starts

// init project
var moment = require('moment');
var express = require('express');
var app = express();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:timestamp", function(req, res) {
  var data = req.params.timestamp;
  
  res.set('Content-Type', 'application/json');
  res.send(getTimestamp(data));
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

function getTimestamp(data) {
  var result = {
    unix: null,
    natural: null
  };
  
  if (+data >= 0) {
    result.unix = +data;
    result.natural = moment.unix(result.unix).format("MMMM D, YYYY");
  } 
   
  else if (moment(data, "MMMM D, YYYY").isValid()) {
    result.unix = moment(data, "MMMM D, YYYY").format("X");
    result.natural = moment(data).format("MMMM D, YYYY");
  } else {
    return result;
  }
  
  
  return result;
};