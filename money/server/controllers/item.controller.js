const ItemsModule = require('../models/items.model');


exports.wallet = async (req , res)=>{
   let tasks = await ItemsModule.wallet(req.body);
   res.json(tasks);
};