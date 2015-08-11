var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * 
 * args:
 *   keywords - comma separated keywords inputed by user
 *   meta_keywords - comma separated keywords auto extracted from web src 
 *   width - display width in pixels
 *   height - display height in pixels
 *   src - source web address
**/
app.get('/getDonationLink', function (req, res) {
  var args = {
    keywords: req.query.keywords || '',
    meta_keywords: req.query.meta_keywords || '',
    width: req.query.width || 500,
    height: req.query.height || 110,
    src: req.query.src || null
  }
  var argError = validateArgs(args);
  
  console.log('keywords: [%s], argError: [%s]', JSON.stringify(args), argError);
  res.type('text/html');
  
  if (argError) {
    res.send(argError);
    return;
  }
  
  res.send(getDonationLink(args));
});

var getDonationLink = function(args) {
  // add entry to database to keep track of all queries
  
  // derive and return html
  
  return 'hello world';
}

var validateArgs = function(args) {
  if (args.keywords.length == 0 && args.meta_keywords.length == 0) {
    return 'missing keywords, please provide keywords';
  }
  
  if (!isNumeric(args.width)) {
    return 'invalid width';
  }
  
  if (!isNumeric(args.height)) {
    return 'invalid height';
  }
  
  args.width = Math.round(args.width);
  args.height = Math.round(args.height);
  
  return null;
}

var isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var server = app.listen(process.env.PORT || 7080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
