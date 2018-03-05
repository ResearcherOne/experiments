var retimer = require('retimer');

var cookieList = {
	"akkol": {
		timerObject: null,
		token: null
	}
};

function expireCookie(){
	cookieList["akkol"].timerObject.clear();
	cookieList["akkol"].timerObject = null;
	cookieList["akkol"].token = null;
	console.log(JSON.stringify(cookieList));
}

function setExpiringCookie() {
	cookieList["akkol"].timerObject = retimer(expireCookie, 20);
	cookieList["akkol"].token = 9999;
	console.log("Current Token:"+JSON.stringify(cookieList["akkol"].token));
}

setExpiringCookie();