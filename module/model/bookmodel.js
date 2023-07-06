const { DataTypes } = require("sequelize")
const sequelize = require("../database/connect")

const Books = sequelize.define("books",{
    id_book : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    amount : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
},{
    timestamps : false
})

module.exports = Books