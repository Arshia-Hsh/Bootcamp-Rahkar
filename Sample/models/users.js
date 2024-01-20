const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const Users = sequelize.define('Users', {
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  mobile:{
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
});

console.log(Users === sequelize.models.Users); 
module.exports = Users;
