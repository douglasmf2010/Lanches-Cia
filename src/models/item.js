const connection = require('../config/database');
const {DataTypes} = require('sequelize');

const Item = connection.define("Item", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
},
    {
        tableName: "itens",
        timestamps: true
    }
);

module.exports = Item;
