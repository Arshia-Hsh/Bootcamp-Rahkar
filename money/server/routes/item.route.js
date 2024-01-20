const express = require('express');
const router = express.Router();

const {wallet, expenses, save, getAll} = require('../controllers/item.controller')

router.post('/wallet' , wallet);
router.post('/save',save)
router.post('/expenses',expenses)
router.post('/all',getAll)

module.exports = router;