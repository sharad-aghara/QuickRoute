const nanoid = import ('nanoid');
const { URI } = require('../config/index');

async function generateNewShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({
        error: 'URL is required'
    });

    const shortId = nanoid();

    await URI.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({ id:shortId });
}

module.exports = generateNewShortUrl;