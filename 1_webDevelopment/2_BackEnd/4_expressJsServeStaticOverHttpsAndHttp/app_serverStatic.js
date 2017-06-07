var express = require('express')
  , fs = require('fs')
  , https = require('https')

var httpsOptions = {
    key: fs.readFileSync('path/to/key')
      , cert: fs.readFileSync('path/to/cert')
}

var app = express.createServer()
    , appSecure = express.createServer(httpsOptions)

app.use(express.static('public'));
appSecure.use(express.static('public'));

app.listen(80)
appSecure.listen(443)
