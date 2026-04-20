const ItemController = require('../controllers/item_controllers')

function route(app){
     app.get("/item", (req, res)=>{
        ItemController.index(req, res)
     });
     app.get("/item/:id", (req, res)=>{
        ItemController.show(req, res)
     });
     app.post('/item', (req, res)=>{
        ItemController.create(req, res);
     });
     app.put('/item/:id', (req, res)=>{
        ItemController.update(req, res);
     });
     app.delete('/item/:id', (req, res)=>{
        ItemController.delete(req, res);
     })
}
module.exports = route

