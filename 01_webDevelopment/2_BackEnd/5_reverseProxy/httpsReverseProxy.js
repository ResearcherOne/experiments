var bouncy = require('bouncy');
var fs = require('fs')
var options = {key: fs.readFileSync('path/to/key'), cert: fs.readFileSync('path/to/cert')};

bouncy(options, function (req, bounce) {
        if (req.headers.host === 'icatet.org') {
                bounce(8080)
        } else if (req.headers.host === 'bot.icatet.org') {
                bounce(8081)
        }
}).listen(8443);

