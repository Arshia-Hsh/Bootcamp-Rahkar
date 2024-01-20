const express = require('express');
const { getBooksData } = require('../cotrollers/Books.controller');
const router = express.Router()

router.post('/books',getBooksData );
router.post('/add',Add);
module.exports = router
