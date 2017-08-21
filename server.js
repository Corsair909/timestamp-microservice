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
  
  var date;
  if (!isNaN(parseInt(data))) {
    if(parseInt(data, 10) >= 0) {
      result.unix = parseInt(data, 10);
      result.natural = moment.unix(data).format("MMMM DD, YYYY")
    } else {
      return result;
    }
  } else if (moment(data, 'YYYY-MMMM-DD').isValid === true) {
    result.unix = (moment(data).format('MMMM DD YYYY')). getTime();
    result.natural = moment(data).format('MMMM DD YYYY');
  } else {
    return result;
  }
  
  return result;
};
