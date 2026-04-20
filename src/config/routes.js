const PedidoController = require('../controllers/Pedidos_controller');

function route(app) {
  app.get('/pedido', (req, res) => {
    PedidoController.index(req, res);
  });
  app.get('/pedido/:id', (req, res) => {
    PedidoController.show(req, res);
  });
  app.post('/pedido', (req, res) => {
    PedidoController.create(req, res)
  });
  app.put('/pedido/:id', (req, res) => {
    PedidoController.update(req, res);
  });
  
  app.delete('/pedido/:id', (req, res) => {
    PedidoController.delete(req, res);
  });
}

module.exports = route;
