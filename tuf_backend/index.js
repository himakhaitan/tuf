// Imports
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const logging = require("./middlewares/logging");

// Creating Express App
const app = express();

// Middlewares
app.use(express.json()); // Json Data and populating it to req.body
app.use(logging);
app.use(cors())

// PARSE application/x-www-form-urlencoded (Form Data)
app.use(bodyParser.urlencoded({ extended: false }));

// PARSE application/json 
app.use(bodyParser.json()); // Not required after 4.16.0 because same as express.json()

// Routes
app.use("/submissions", require("./routes/submissions"));

// General Route
app.get("/", (req, res) => {
  // Sending Response
  return res.json({
    server: "TakeUForward",
    status: "Online",
    host: req.headers.host,
  });
});

// Defining Server Port
const PORT = process.env.PORT || 3000;

// Establishing Database Connection
const createTcpPool = require("./config/db.js");
createTcpPool();

// Listening to Server
app.listen(PORT, () => {
  console.log(`Server is up and running at PORT : ${PORT}`);
});
