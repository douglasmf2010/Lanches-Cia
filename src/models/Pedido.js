const connection = require('../config/database');
const { DataTypes } = require('sequelize');

const Pedido = connection.define(
  'Pedido',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'pedidos',
    timestamps: true,
  },
);

module.exports = Pedido;
