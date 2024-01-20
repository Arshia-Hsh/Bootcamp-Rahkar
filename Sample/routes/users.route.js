const express = require('express');
const router = express.Router();
const { getUsersData } = require('../controllers/users.controller')

router.post('/users',getUsersData );

module.exports = router
