const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema(
    {
        shortId: {
            type: String,
            required: true,
            
        }
    }
)