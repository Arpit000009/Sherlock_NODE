const express = require('express')
const {handleGenrateNewShortURL,
    handleDeleteShortURL,handleGetAnalytics
} = require('../controllers/url')
const router = express.Router();

router.post('/',handleGenrateNewShortURL)
router.delete('/:shortId', handleDeleteShortURL);

router.get('/analytics/:shortId',handleGetAnalytics)
module.exports = router;