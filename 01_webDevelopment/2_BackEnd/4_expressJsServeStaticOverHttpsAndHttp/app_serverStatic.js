var express = require('express')
  , fs = require('fs')
  , https = require('https')
  , app = express();

var httpsOptions = {
    key: fs.readFileSync('ssl/icatet.org.key')
      , cert: fs.readFileSync('ssl/icatet.org.crt')
}

app.use(express.static('public'));
https.createServer(httpsOptions, app).listen(1111);
