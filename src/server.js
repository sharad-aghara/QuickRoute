const express = require('express');
const app = express();
const { URL, PORT } = require('./config/index');
const mongoose = require('mongoose');

// connect to mongoDB
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("Connection with database is successful."))
    .catch((err) => console.log("error to connect to Database: ", err));

// app start
app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
})