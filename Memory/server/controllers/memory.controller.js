const MemoryModel = require('../models/memory.model')
const Response = require("../utils/response");



exports.AddMemory=async (req,res)=>{
  try{
    let result=await MemoryModel.login(req.body)
    res.json(new Response(result, true, ""))
  }catch(error){
    res.json(new Response([], false, error))
  }
}

  exports.EditMemory=async (req,res)=>{
    try{
      let result=await MemoryModel.login(req.body)
      res.json(new Response(result, true, ""))
    }catch(error){
      res.json(new Response([], false, error))
    }

}

exports.DeleteMemory=async (req,res)=>{
    try{
      let result=await MemoryModel.login(req.body)
      res.json(new Response(result, true, ""))
    }catch(error){
      res.json(new Response([], false, error))
    }

}