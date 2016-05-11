var express = require('express');
var app = express();

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


app.use(express.static('public'));
// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: "",
    clientSecret: "",
    callbackURL: ""
  },
  function(accessToken, refreshToken, profile, done) {
       console.log("here you go:");
      console.log(profile);
      return done();
  /*
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         console.log(accessToken);
         console.log(refreshToken);
         console.log(profile);
         return done(err, user);
       });
  */
  }
));

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/done');
	console.log("redirected to done");
  });
  
app.get('/done', function(req, res){
  res.send("yo, done.");
});

app.get('/login', function(req, res){
  res.send("fail.");
});
  
app.listen(802, function () {
  console.log('Example app listening on port 802!');
});
