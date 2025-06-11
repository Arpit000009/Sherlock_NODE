const express = require('express')
const {handleGenrateNewShortURL,
    handleDeleteShortURL
} = require('../controllers/url')
const router = express.Router();

router.post('/',handleGenrateNewShortURL)
router.delete('/:shortId', handleDeleteShortURL);


module.exports = router;