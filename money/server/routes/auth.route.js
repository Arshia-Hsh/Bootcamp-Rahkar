const express=require('express')
const { register,login} = require('../controllers/auth.controller')
const {wallet} = require('../controllers/item.controller')
const router =express.Router()

router.post('/register',register)
router.post('/login',login)
.post('/wallet' , wallet);


module.exports =router
