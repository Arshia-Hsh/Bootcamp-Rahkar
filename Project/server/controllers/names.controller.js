const Names=require("../models/names")
exports.getNamesData = async (req, res) => {
    console.log(req);
    try {
    let data=await Names.create({
        name: req.body.name,
        image:req.body
    });
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }


    exports.upload = upload.single('image'), async (req, res) => {
    try {
      const  name  = req.body;
      const Path = req.file.path; 
      const newImage = await Image.create({ name, image_path: Path });
  
      res.status(201).json(newImage);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Internal Server Error' });
    }
  }

  };
  
    exports.FindNamesData = async (req, res) => {
      console.log(req);
      try {
      let data=await Names.findAll({
          name: req.body.name,
          image:req.body
      });
      console.log(data);
        res.json(data,200);
      } catch (error) {
        res.status(400).json({ error: 'Internal Server Error' });
      }
    }

  