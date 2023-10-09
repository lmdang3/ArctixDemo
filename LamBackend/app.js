// Lam Dang
const express = require("express");
const morgan = require("morgan"); //better debugging
const cors = require("cors");
//allow using a .env file
require("dotenv").config();   

//creates a new instance of express application
const app = express();

// add cors header to the server
app.use(cors({
  origin: '*'
}));

// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT ;
console.log(PORT)

//setup
app.use(express.json());
app.use(express.text({ type: "application/xml" }));
app.use(morgan("dev"));

//import routes
const contactRoute = require('./routes/Contactme');
// const userDataRoute  = require('./routes/userData');
// const bookDataRoute  = require('./routes/bookData');
// const userRatingDataRoute  = require('./routes/userRatingData');

//setup middle ware for routes
// app.use('/userData', userDataRoute);
// app.use('/bookData', bookDataRoute);
// app.use('/userRatingData', userRatingDataRoute);
app.use('/contactlog',contactRoute);

app.listen(PORT, () => {
  console.log("Server started listening on localhost:", PORT);
});

//error handler
app.use(function (err, req, res, next) {
  // logs error and error code to console
  console.error(err.message, req);
  if (!err.statusCode)
    err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

