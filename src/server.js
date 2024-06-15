const express = require('express');
const app = express();
const { URL, PORT } = require('./config/index');

// app start
app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
})