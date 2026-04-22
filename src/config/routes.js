const ItemController = require('../controllers/item_controllers');
const PedidoController = require('../controllers/Pedidos_controller');

function route(app) {
  app.get('/item', (req, res) => {
    ItemController.index(req, res);
  });
  app.get('/item/:id', (req, res) => {
    ItemController.show(req, res);
  });
  app.post('/item', (req, res) => {
    ItemController.create(req, res);
  });
  app.put('/item/:id', (req, res) => {
    ItemController.update(req, res);
  });
  app.delete('/item/:id', (req, res) => {
    ItemController.delete(req, res);
  });
  app.get('/pedido', (req, res) => {
    PedidoController.index(req, res);
  });
  app.get('/pedido/:id', (req, res) => {
    PedidoController.show(req, res);
  });
  app.post('/pedido', (req, res) => {
    PedidoController.create(req, res);
  });
}
module.exports = route;
