const express = require('express');
const app = express();
const { URI, PORT } = require('./config/index');
const mongoose = require('mongoose');
const urlRoute = require('./routes/routes');

// connect to mongoDB
mongoose.connect(URI)
    .then(console.log("Connection with database is successful."))
    .catch((err) => console.log("error to connect to Database: ", err));

// connect main route to server
app.use('/url', urlRoute);

// app start
app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
})