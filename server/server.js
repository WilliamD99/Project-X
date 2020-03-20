const express = require("express");

// session id on server session cookie on client
const session = require("express-session");

const cors = require('cors');

// add http headers, small layer of security
const helmet = require('helmet');

// log http requests
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

// import router paths
const login = require('./routes/login');
const weird = require("./routes/weird")

// require .env files for private data (keys and secrets)
require('dotenv').config();

const passportConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
};

app.use(express.json());

// initialize HTTP Headers middleware
app.use(helmet());

// morgan logger, network info in node console
app.use(logger('dev'));

// enable cors
app.use(cors({
  origin: true,
  credentials: true
}));

// =========== Passport Config ============
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());

// passport.session middleware explanation
// https://stackoverflow.com/questions/22052258/what-does-passport-session-middleware-do
app.use(passport.session());

// initialize github strategy middleware
// http://www.passportjs.org/packages/passport-github/
passport.use(
  new GitHubStrategy(passportConfig, function (
    _accessToken,
    _refreshToken,
    profile,
    cb
  ) {
    // console.log('Github Callback: ', profile);
    // this profile will get saved in express session
    return cb(null, profile);
  })
);

// serializeUser and deserializeUser explanation:
// https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});
// =========================================

// paths, url endpoint routing
app.use('/', login);
app.use("/weird", weird)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
