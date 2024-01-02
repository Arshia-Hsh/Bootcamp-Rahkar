const db=require("../utils/databse")
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const secret = "secret";
const bcrypt = require("bcrypt");
class AuthModel{
  
  async register(user){
  
    try{
      let {username,password}=user
      let querySelect="select * from user where username=?"
      let [dataSelect]= await db.connection.execute(querySelect,[username])
  
      if (dataSelect.length>0) {
        throw new Error("user is exist")
      }
      const salt = await bcrypt.genSaltSync(saltRounds);
      const hashedPassword = await bcrypt.hashSync(password, salt);
      let query="insert into users (username,password) values( ?,?,?)"
      await db.connection.execute(query,[username,hashedPassword])
  
      return true
    }catch(error){
      console.log(error.message);
      throw new Error(error)
    }
  }
  async login(data) {
    let { username, password } = data;
    const searchQuery = "select password from users where username = ?";
    const [user] = await db.connection.execute(searchQuery, [username]);
    if (user.length === 0) {
      throw new Error("user not found")
    }
    const isPasswordValid = await bcrypt.compareSync(password, user[0].password);
    if (isPasswordValid) {
      const token = jwt.sign({ username }, secret , { expiresIn: "1h" });
      return token;
    } else {
      throw new Error("Invalid")

    }
  }

}

module.exports=new AuthModel()
