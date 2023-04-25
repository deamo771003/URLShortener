const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const urlShortener = require('./modules/urlShorteners')

router.use('/', home)
router.use('/short', urlShortener)

module.exports = router