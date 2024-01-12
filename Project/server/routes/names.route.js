const express = require('express');
const { getNamesData } = require('../controllers/names.controller');
const router = express.Router()

router.post('/',getNamesData );

module.exports = router
