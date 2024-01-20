const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const Books = sequelize.define('Books', {
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  price:{
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
});

console.log(Books === sequelize.models.Books); 

book.belongsto(Users,{foreignKey:'userId'})
module.exports = Books;
