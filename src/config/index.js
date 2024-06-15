const dotenv = require('dotenv');

dotenv.config();

const { URL, PORT } = process.env;

module.exports = { URL, PORT };