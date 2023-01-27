const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();



// Route includes
const weatherRouter = require('./routes/weather.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //


// start up passport sessions


/* Routes */
app.use('/api/weather', weatherRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
