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
const weird = require("./routes/weird");
const save = require("./routes/save")

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

app.use(passport.session());

// initialize github strategy middleware
passport.use(
  new GitHubStrategy(passportConfig, function (
    _accessToken,
    _refreshToken,
    profile,
    cb
  ) {
    // this profile will get saved in express session
    return cb(null, profile);
  })
);

// serializeUser and deserializeUser explanation:
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});
// =========================================

// paths, url endpoint routing
app.use('/', login);
app.use("/weird", weird);
app.use("/save", save);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
