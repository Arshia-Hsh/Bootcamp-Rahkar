const db = require('../utils/database');

class ItemsModule{

    async wallet(items){
        const { price } = items;
        const query = "insert into transaction (amount) values (?)";
        let res = await db.connection.execute(query ,[ price ])
        return res;
    }
}

module.exports = new ItemsModule();
