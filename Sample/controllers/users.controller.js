const Users=require("../models/users")
exports.getUsersData = async (req, res) => {
    console.log(req);
    try {
    let data=await Users.create({
        name: req.body.name,
        mobile: req.body.mobile,

    });
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }