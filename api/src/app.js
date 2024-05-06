const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index.js");
const session = require('express-session');
const passport = require('passport');
const passportStrategy = require('./utils/passport.js'); // Agrega esta línea
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');


require("./db.js");

const server = express();

server.name = "API";


server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
server.use(passport.initialize());
server.use(passport.session());

server.use(cors({
  credentials: true,
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", router);
server.use('/', indexRouter);
server.use('/', authRouter);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
