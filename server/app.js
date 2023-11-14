const express = require("express");
const app = express();
const GlobalErrorHandler = require("./controllers/errorController");

const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const cookieParser = require("cookie-parser");
//Routers
const teacherRouter = require("./routes/teacherRouter");
const studentRouter = require("./routes/studentRouter");
const homeworkRouter = require("./routes/homeworkRouter");
const classRouter = require("./routes/classRouter");
const authRouter = require("./routes/authRouter");

const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(
  cors({
    origin: true,
    methods: ["POST", "PATCH", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Set Security HTTP header
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Limit request from same IP
const limiter = rateLimit({
  max: 10000,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP , please try again in an  hours",
});

app.use("/api", limiter);
// Data sanizitation against NoSQL query injection
app.use(mongoSanitize());
// Data sanizitation against xss query injection
app.use(xss());
//html parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "price",
      "maxGroupSize",
      "ratingsQuantity",
      "ratingsAverage",
      "difficulty",
    ],
  })
);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/classes", classRouter);
app.use("/api/v1/homeworks", homeworkRouter);

app.use(GlobalErrorHandler);

module.exports = app;
