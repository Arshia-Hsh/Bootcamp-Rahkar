const express=require('express')
const { MemoryList,MemoryReciever } = require('../controllers/memory.controller')

const router =express.Router()

router.post('/list',MemoryList)
router.post('/Reciever',MemoryReciever)


module.exports =router
