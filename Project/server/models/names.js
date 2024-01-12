const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const Names = sequelize.define('Names', {
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  path: {
    type: DataTypes.STRING,
  }
},
);
a
console.log(Names === sequelize.models.Names); 
module.exports = Names;
