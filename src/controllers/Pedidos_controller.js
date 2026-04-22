const { underscoredIf } = require('sequelize/lib/utils');
const database = require('../config/database');
const Pedido = require('../models/Pedido');

class PedidoController {
  static async index(req, res) {
    let pedidos = await Pedido.findAll();

    res.send(JSON.stringify(pedidos));
  }

  static async show(req, res) {
    const { id } = req.params;
    let pedido = await Pedido.findByPk( id );
    // let code = patient.length == 0 ? 404 : 200;
    res.send(JSON.stringify(pedido));
  }

  static async create(req, res) {
    const { name, observacao, mesa } = req.body;
    let pedido = await Pedido.create({
      name: name,
      observacao: observacao,
      mesa: mesa,
    });
    pedido.save();

    res.send(JSON.stringify(pedido));
  }

  // static async update(req, res) {
  //   const { id } = req.params;
  //   const { name, observacao, mesa } = req.body;

  //   let pedido = await Pedido.findByPk(id);
  //   if (name !== undefined) pedido.name = name;
  //   if (observacao !== undefined) pedido.observacao = observacao;
  //   if (mesa !== undefined) pedido.mesa = mesa;

  //   await pedido.save();

  //   res.send(JSON.stringify({ success: true }));
  // }

  // static async delete(req, res) {
  //   const { id } = req.params;
  //   let patient = await Patient.findByPk(id);
  //   patient.destroy();

  // res.send(JSON.stringify({ success: true }));
  // }
}

module.exports = PedidoController;
