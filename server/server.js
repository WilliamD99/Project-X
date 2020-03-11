const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const passport = require("passport");
const session = require("express-session");
const GitHubStrategy = require("passport-github").Strategy;
// private keys
const keys = require("./config/keys");
const cors = require("cors");

// init the express app
const app = express();

// middleware
app.use(cors());
app.use(logger("dev"));
app.use(helmet());
// =========== Passport Config ===========
app.use(
  session({
    secret: "scully",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GitHubStrategy(keys, (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  })
);
// for storing in db, or storing in a cookie
passport.serializeUser((user, cb) => {
  cb(null, user);
});
// retrieve from db
passport.deserializeUser((user, cb) => {
  cb(null, user);
});
app.get("/login", passport.authenticate("github"));
/**
 * Auth route
 */
app.get(
  "/auth",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/loginFailed"
  })
);
app.get("/loginFailed", (req, res) => {
  res.status(401).send(`please login with a valid account`);
});

app.listen(5000, console.log(`app listening on port 5000`));
