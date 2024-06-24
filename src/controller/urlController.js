// const nanoid = import ('nanoid');
const ShortUniqueId = require('short-unique-id');
const URL = require('../models/UrlSchema');

async function generateNewShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({
        error: 'URL is required'
    });

    // const shortId = nanoid();
    const uid = new ShortUniqueId();
    const shortId = uid.rnd();

    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({ id:shortId });
}

module.exports = generateNewShortUrl;