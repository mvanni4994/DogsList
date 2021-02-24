const express = require('express');
const exphbs = require('express-handlebars');

const htmlRouter = require('./routes/html-routes.js');
const ownerRouter = require('./routes/owner-api-routes.js');
const apiRouter = require('./routes/post-api-routes.js');

// Passport Starter Code
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
// passport.use(new Strategy(
//   function(username, password, cb) {
//     db.users.findByUsername(username, function(err, user) {
//       if (err) { return cb(err); }
//       if (!user) { return cb(null, false); }
//       if (user.password != password) { return cb(null, false); }
//       return cb(null, user);
//     });
//   }));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
// passport.serializeUser(function(user, cb) {
//   cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
//   db.users.findById(id, function (err, user) {
//     if (err) { return cb(err); }
//     cb(null, user);
//   });
// });
// End of passport starter code

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Static directory
app.use(express.static('public'));

// Invoke routes
htmlRouter(app);
ownerRouter(app);
apiRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
