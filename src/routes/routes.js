const express = require('express');
const router = express.Router();
const generateNewShortUrl = require('../controller/urlController');

router.post('/', generateNewShortUrl);

module.exports = router;