const database = require('../config/database')
const Item = require('../models/item')

class ItemController{
     static async index(req, res){
        let itens = await Item.findAll();

        res.send(JSON.stringify(itens));
    }
    static async show(req, res){
        const {id} = req.params;
        let item = await Item.findByPk(id);

        res.send(JSON.stringify(item))
    }
    static async create(req, res){
        const { name, category, description, price } = req.body;
        let item = await Item.create({
            name: name,
            category: category,
            description: description,
            price: price
        });
        
        item.save();

        res.send(JSON.stringify(item));
    }
    static async update(req, res){
        const {id} = req.params;
        const { name, category, description, price } = req.body;

        let item = await Item.findByPk(id)
        if(name !== undefined) item.name = name;
        if(category !== undefined) item.category = category;
        if(description !== undefined) item.description = description;
        if(price !== undefined) item.price = price;

        await item.save();

        res.send(JSON.stringify({ success: true }))
    }
    static async delete(req, res){
        const { id } = req.params;
        let item = await Item.findByPk(id);
            item.destroy();
            res.send(JSON.stringify({success: true}))
    }
}

module.exports = ItemController