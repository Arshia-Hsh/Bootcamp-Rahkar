const db=require("../utils/databse")
class MemoryModel{
    
  async AddMemory(data){
      let {title}=data
     const data="insert into users (title)  values (?)"
       await database.connection.execute(data,[title]);
  }

  async EditMemory(data){
    let {id} = data
      const queryitem="SELECT * FROM users WHERE id=? "
      const [title] = await databas.connection.execute(queryitem ,[id]);
      return title
   }

    UpdateMemory(data) {
      return new Promise(async (resolve, reject) => {
        try {
          const { title, id } = data;
    
          const selectQuery = "SELECT * FROM users WHERE id=?";
          await database.connection.execute(selectQuery, [id]);
    
          const updateQuery = "UPDATE users SET title=? WHERE id=?";
          await database.connection.execute(updateQuery, [title, id]);
    
          resolve("Update successful");
        } catch (error) {
          reject(error);
        }
      });
    }
    //کد قسمت اپدیتو من ننوشتم سرچ کردم،خودم نتونستم بنویسم

    async DeleteMemory(data){
       let {id} = data
       const data2="DELETE FROM users WHERE id=?;"
       await database.connection.execute(data2 ,[id]);
    }
}
module.exports=new MemoryModel()