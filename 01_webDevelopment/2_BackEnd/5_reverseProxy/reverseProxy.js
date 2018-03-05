var bouncy = require('bouncy');

bouncy(function (req, bounce) {
        if (req.headers.host === 'icatet.org') {
                bounce(8080)
        } else if (req.headers.host === 'bot.icatet.org') {
                bounce(8081)
        }
}).listen(80);

