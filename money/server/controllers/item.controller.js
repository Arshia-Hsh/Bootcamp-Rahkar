const ItemsModule = require('../models/items.model');


exports.wallet = async (req , res)=>{
   let tasks = await ItemsModule.wallet(req.body);
   res.json(tasks);
};
exports.save=async (req,res)=>{
   const data = await ItemsModule.save(req.body)
   res.json(data)
   }
   exports.expenses=async (req,res)=>{
       const data = await ItemsModule.expenses(req.body)
      res.json("Done")
       }
   exports.getAll=async (req,res)=>{
           await res.json(await ItemsModule.getAll(req.body))    
   }