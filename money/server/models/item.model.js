const db = require('../utils/database');

class ItemsModule{

    async wallet(data){
        const { amount } = data;
        const insert = "insert into transaction (amount) values (?)";
        let result = await database.connection.execute(insert ,[ amount ])
        return result;
    }
    async save(data){
        let {id,Money}=data
        
        const data="insert into transaction (amount,users_id)  values (?,?)"
    
        await database.connection.execute(data, [Money,id,"Added"]);
            
    }
    async expenses(data){
        let {id,title,Money}=data
        const insert="insert into transaction (amount,users_id,title)  values (?,?,?)"
        await database.connection.execute(insert, [Money,id,title]);
            
    }
    async getAll(data){   
        let id=data 
        const insert="SELECT * FROM transaction WHERE users_id = ? "
        const [info] = await database.connection.execute(insert, [id])
        return info
    }
}

module.exports = new ItemsModule();
