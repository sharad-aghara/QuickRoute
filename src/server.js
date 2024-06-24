const express = require('express');
const app = express();
const { URI, PORT } = require('./config/index');
const mongoose = require('mongoose');
const urlRoute = require('./routes/routes');
const URL = require('./models/UrlSchema');

// Middlware to Parse JSON bodies
app.use(express.json());

// connect to mongoDB
mongoose.connect(URI)
    .then(console.log("Connection with database is successful."))
    .catch((err) => console.log("error to connect to Database: ", err));

// connect main route to server
app.use('/url', urlRoute);

// redirecting to original url from short url
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        }, {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            }
        });

        const redirectURL = entry.redirectUrl;
        
        try {
            res.redirect(redirectURL);
        } catch (err) {
            console.error(err);
        }
})

// app start
app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
})