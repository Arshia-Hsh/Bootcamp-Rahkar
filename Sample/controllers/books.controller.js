const Books=require("../models/books")
exports.getBooksData = async (req, res) => {
    console.log(req);
    try {
    let data=await Books.create({
        name: req.body.name,
        price: req.body.price,
    });
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }
  exports.Add = async (req, res) => {

    await Users.hasMany(book,{foreignKey:'id'});
    await Books.belongsTo(User,{foreignKey:'user_id'});
    let data=await Books.findAll({ include:[User]});
    res.json(data)
      
  }