const shortid = require("shortid");
const URL = require('../model/url')

async function handleGenrateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:'url is required'})
   const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        vistHistory:{}
    });

    return res.json({id: shortID})
}

async function handleDeleteShortURL(req, res) {
    const shortId = req.params.shortId;

    const result = await URL.findOneAndDelete({ shortId });

    if (!result) {
        return res.status(404).json({ message: 'Short URL not found' });
    }

    return res.status(200).json({ message: 'Short URL deleted successfully' });
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks:result.visitHistory.length, analytics:result.visitHistory,

    });
}

module.exports = {
    handleGenrateNewShortURL,
    handleDeleteShortURL,
    handleGetAnalytics
}