var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * 
 * args:
 *   keywords - keywords separated by comma
 *   width - display width
 *   height - display height
**/
app.get('/getDonationLink', function (req, res) {
  var keywords = req.query.keywords;
  var width = req.query.width;
  var height = req.query.height;
  res.type('html');

  console.log('keywords: [%s], width: [%s], height: [%s]', keywords, width, height);
  
  if (!isValidArgument(keywords, width, height)) {
    res.send('invalid arugment');
    return;
  }
  
  keywords = keywords.split(',');
  
  res.send(getDonationLink(keywords, width, height));
});

var getDonationLink(keywords, width, height) {
  return 'hello world';
}

var isValidArgument = function(keywords, width, height) {
  if (!keywords || !width || !height) {
    return false;
  }
  
  if (!isNumeric(width) || !isNumeric(height)) {
    return false;
  }
  
  return true;
}

var isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var server = app.listen(7080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
