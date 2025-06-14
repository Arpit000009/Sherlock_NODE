const shortid = require("shortid");
const URL = require("../model/url");

async function handleGenrateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortID = shortid();

  try {
    const newURL = await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
      createdBy: req.user._id,
    });

    const urls = await URL.find({ createdBy: req.user._id });
    return res.render("home", {
      id: shortID,
      urls,
    });
  } catch (err) {
    console.error("Error creating short URL:", err);
    return res.status(500).send("Internal Server Error");
  }
}

async function handleDeleteShortURL(req, res) {
  const shortId = req.params.shortId;
  try {
    const result = await URL.findOneAndDelete({ shortId });
    if (!result) {
      return res.status(404).json({ message: "Short URL not found" });
    }
    return res.status(200).json({ message: "Short URL deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  try {
    const result = await URL.findOne({ shortId });
    if (!result) return res.status(404).json({ error: "URL not found" });
    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleGenrateNewShortURL,
  handleDeleteShortURL,
  handleGetAnalytics,
};