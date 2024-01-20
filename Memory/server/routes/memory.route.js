const express=require('express')
const { MemoryList,MemoryReciever, AddMemory, UpdateMemory, EditMemory, DeleteMemory } = require('../controllers/memory.controller')

const router =express.Router()

router.post('/list',MemoryList)
router.post('/reciever',MemoryReciever)
router.post('/add',AddMemory)
router.post('/edit',EditMemory)
router.post('/update',UpdateMemory)
router.post('/delete',DeleteMemory)

module.exports =router
